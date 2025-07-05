export default function handler(req, res) {
  const target = req.query.target || 'http://admin.bumba.global';
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>SSRF Test</title>
      <meta property="og:title" content="SSRF Reached Admin" />
      <meta property="og:description" content="Confirmed admin SSRF on ${target}" />
    </head>
    <body>
      <h1>SSRF to ${target}</h1>
    </body>
    </html>
  `);
}
