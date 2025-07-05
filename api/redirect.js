// pages/api/embed.js
export default function handler(req, res) {
  const target = req.query.target || 'http://localhost';
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <html>
    <head>
      <title>SSRF: ${target}</title>
      <meta name="description" content="Internal fetch of ${target}" />
      <meta property="og:title" content="Internal SSRF Fetch" />
      <meta property="og:description" content="SSRF reached ${target}" />
      <meta property="og:image" content="http://yourhost.com/image.jpg" />
    </head>
    <body>
      <h1>SSRF to ${target}</h1>
      <p>If you see this reflected, SSRF reached it.</p>
    </body>
    </html>
  `);
}
