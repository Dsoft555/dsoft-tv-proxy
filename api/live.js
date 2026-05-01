export default async function handler(req, res) {
  const targetUrl = "https://bpcdn.dialog.lk/bpk-tv/Ch001/out/index.mpd?|drmScheme=widevine&drmLicense=https://api.viulk.xyz/api/api/license/?id=1&expires=1765395759";

  try {
    // අපි කෙලින්ම redirect කරලා බලමු, සමහර ප්ලේයර්ස් වලට මේකෙන් IP බ්ලොක් එක පනින්න පුළුවන්
    res.writeHead(302, {
      'Location': targetUrl,
      'Access-Control-Allow-Origin': '*'
    });
    res.end();
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
}
