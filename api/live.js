export default async function handler(req, res) {
  const targetUrl = "https://bpcdn.dialog.lk/bpk-tv/Ch001/out/index.mpd?|drmScheme=widevine&drmLicense=https://api.viulk.xyz/api/api/license/?id=1&expires=1765395759";
  
  const encodedUrl = targetUrl.replace(/\|/g, '%7C');

  try {
    const response = await fetch(encodedUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        "Referer": "https://www.dialog.lk/",
        "X-Forwarded-For": "112.134.0.1"
      }
    });

    const data = await response.text();
    
    // මේ හෙඩර්ස් ටික දාපුවාම ඩවුන්ලෝඩ් නොවී කෙලින්ම stream එක වැඩ කරයි
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/dash+xml');
    res.setHeader('Content-Disposition', 'inline'); // මේකෙන් තමයි download වෙන එක නවත්තන්නේ
    
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
}
