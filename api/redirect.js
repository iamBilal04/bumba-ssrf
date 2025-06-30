export default function handler(req, res) {
  res.writeHead(302, {
    Location: 'http://admin.bumba.global/'
  });
  res.end();
}
