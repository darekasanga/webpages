// Simple health check endpoint
export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end();
  }

  const health = {
    status: "ok",
    timestamp: new Date().toISOString(),
    service: "webpages",
    version: "1.0.0"
  };

  res.status(200).json(health);
}
