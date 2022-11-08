const puppeteer = require('puppeteer');
const fs = require('fs/promises');

const url = "https://en.savefrom.net/1-youtube-video-downloader-394/";
const isFullPage = false;

async function start() {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    // page.setJavaScriptEnabled(false);
    await page.setUserAgent('Mozilla/5.0 (Windows NT 5.1; rv:5.0) Gecko/20100101 Firefox/5.0');
    await page.goto(url);
    
    await page.type('input','https://www.youtube.com/watch?v=bV_NdUZEmnE');
    // await Promise.all([page.click('#sf_submit'), await page.waitForNavigation()]);
    await Promise.all([page.click('#sf_submit')]);
    
    // const info = await page.evaluate(() => document.querySelector("#sdlink").getAttribute("href"));
    await page.waitForSelector('.row.title');
    
    const info = await page.evaluate(() => document.querySelector(".row.title").textContent);
    const dl720 = await page.evaluate(() => document.querySelector(".link.link-download").getAttribute("href"));

    console.log(dl720);
    
    await browser.close();
}

start();