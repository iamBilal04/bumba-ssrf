export default async function handler(req, res) {
  const { target } = req.query;
  try {
    const r = await fetch(target);
    const html = await r.text();

    const truncate = (s) => s.length > 300 ? s.substring(0, 300) + "..." : s;

    return res.json({
      title: "SSRF Dump",
      description: truncate(html.replace(/<[^>]*>/g, '')),
      image: "http://yourhost.com/image.jpg"
    });
  } catch (err) {
    return res.status(500).json({ error: err.toString() });
  }
}
