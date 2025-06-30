export default function handler(req, res) {
  res.writeHead(302, {
    Location: 'https://vercel.com/docs'
  });
  res.end();
}
