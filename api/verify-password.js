// /api/verify-password.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { password } = req.body;
  const correctPassword = process.env.WORK_SECTION_AUTH_KEY;

  if (password === correctPassword) {
    return res.status(200).json({ success: true });
  }

  return res.status(401).json({ success: false });
}
