export default async function handler(req, res) {
  // අපි සාමාන්‍ය ලින්ක් එකක් ටෙස්ට් කරමු
  const targetUrl = "https://www.google.com";

  try {
    const response = await fetch(targetUrl);
    const data = await response.text();
    res.status(200).send("Proxy is Working! Content Length: " + data.length);
  } catch (error) {
    res.status(500).send("Vercel Connection Error: " + error.message);
  }
}
