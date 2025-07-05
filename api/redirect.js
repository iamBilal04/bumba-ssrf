// /api/redirect.js on Vercel
export default async function handler(req, res) {
  const { target } = req.query;

  const r = await fetch(target);
  const text = await r.text();

  // Try extract something meaningful (like <title> or sensitive values)
  const titleMatch = text.match(/<title>(.*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1] : 'No title';

  const descMatch = text.match(/meta name="description" content="(.*?)"/i);
  const desc = descMatch ? descMatch[1] : 'No desc';

  const imageMatch = text.match(/meta property="og:image" content="(.*?)"/i);
  const image = imageMatch ? imageMatch[1] : 'http://yourhost.com/image.jpg';

  return res.status(200).json({ title, description: desc, image });
}
