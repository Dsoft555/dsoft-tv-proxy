export default async function handler(req, res) {
  try {
    // අපි ලින්ක් එක Encode කරලා තියමු එතකොට characters අවුල් වෙන්නේ නැහැ
    const rawUrl = "https://bpcdn.dialog.lk/bpk-tv/Ch001/out/index.mpd?|drmScheme=widevine&drmLicense=https://api.viulk.xyz/api/api/license/?id=1&expires=1765395759";
    
    // ලින්ක් එකේ තියෙන characters නිවැරදිව සකස් කරනවා
    const targetUrl = rawUrl.replace(/\|/g, '%7C');

    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
        "Referer": "https://www.dialog.lk/",
        "X-Forwarded-For": "112.134.0.1",
        "Accept": "*/*"
      }
    });

    if (!response.ok) {
      return res.status(response.status).send(`Dialog Server Error: ${response.statusText}`);
    }

    const data = await response.text();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/dash+xml');
    res.status(200).send(data);

  } catch (error) {
    res.status(500).send("Connection Failed: " + error.message);
  }
}
