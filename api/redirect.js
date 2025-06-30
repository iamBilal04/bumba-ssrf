export default function handler(req, res) {
  res.writeHead(302, {
    Location: 'http://169.254.169.254/latest/meta-data/'
  });
  res.end();
}
