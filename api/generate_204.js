export default function handler(req, res) {
  // 强行返回 204 状态码，且不带任何内容
  res.status(204).end();
}
