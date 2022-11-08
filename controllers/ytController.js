import puppeteer from 'puppeteer';
const url = "https://en.savefrom.net/1-youtube-video-downloader-394/";

//Get all posts
export const getYtController = async (req, res) => {
  const { ytlink } = req.query;

  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  // page.setJavaScriptEnabled(false);
  await page.setUserAgent('Mozilla/5.0 (Windows NT 5.1; rv:5.0) Gecko/20100101 Firefox/5.0');
  await page.goto(url);
    
  await page.type('input',ytlink);
  await Promise.all([page.click('#sf_submit')]);
    
  await page.waitForSelector('.row.title');
    
  const info = await page.evaluate(() => document.querySelector(".row.title").textContent);
  const dl720 = await page.evaluate(() => document.querySelector(".link.link-download").getAttribute("href"));

  res.status(200).json({ title: info, url: dl720 });
    
  await browser.close();
}