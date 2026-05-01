export default async function handler(req, res) {
  const targetUrl = "https://bpcdn.dialog.lk/bpk-tv/Ch001/out/index.mpd?|drmScheme=widevine&drmLicense=https://api.viulk.xyz/api/api/license/?id=1&expires=1765395759";

  try {
    // අපි සර්වර් එකෙන් fetch කරන්නේ නැතුව කෙලින්ම URL එකට යවමු
    // හැබැයි CORS ප්‍රශ්න එන්නේ නැති වෙන්න headers සකස් කරනවා
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // 302 Redirect එකක් පාවිච්චි කරමු
    res.writeHead(302, {
      'Location': targetUrl
    });
    res.end();

  } catch (error) {
    res.status(500).send("Proxy Error: " + error.message);
  }
}
