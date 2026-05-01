export default async function handler(req, res) {
  // අපි ලින්ක් එක කෑලි වලට කඩලා දාමු එතකොට characters අවුල් වෙන්නේ නැහැ
  const baseUrl = "https://bpcdn.dialog.lk/bpk-tv/Ch001/out/index.mpd";
  const params = "?|drmScheme=widevine&drmLicense=https://api.viulk.xyz/api/api/license";
  const targetUrl = baseUrl + params;

  try {
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        "Referer": "https://www.dialog.lk/",
        "X-Forwarded-For": "112.134.0.1" // ලංකාවේ IP එකක් විදිහට පෙන්වන්න
      }
    });

    if (!response.ok) {
        throw new Error(`Target responded with status ${response.status}`);
    }

    const data = await response.text();
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/dash+xml');
    res.status(200).send(data);
  } catch (error) {
    // මොකක්ද ඇත්තම ලෙඩේ කියලා බලාගන්න මේක උදව් වෙයි
    res.status(500).send("Proxy Error Detail: " + error.message);
  }
}
