// export default function handler(req, res) {
//   const log = {
//     headers: req.headers,
//     ip: req.socket.remoteAddress,
//     userAgent: req.headers['user-agent'],
//   };

//   console.log("SSRF Received:", JSON.stringify(log, null, 2));

//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.end(`
//     <html>
//       <head>
//         <title>SSRF: ${req.headers['host']}</title>
//         <meta name="description" content="${req.headers['x-forwarded-for'] || 'unknown'}" />
//         <meta property="og:image" content="http://${req.headers['host']}/internal.png" />
//       </head>
//       <body>Logged</body>
//     </html>
//   `);
// }

export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Referrer-Policy", "unsafe-url");
  res.writeHead(302, {
    Location: req.query.target || "http://localhost"
  });
  res.end();
}

