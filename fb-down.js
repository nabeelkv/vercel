const puppeteer = require('puppeteer');
const fs = require('fs/promises');

const url = "https://fdown.net/";
const isFullPage = false;

async function start() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    // page.setJavaScriptEnabled(false);
    await page.setUserAgent('Mozilla/5.0 (Windows NT 5.1; rv:5.0) Gecko/20100101 Firefox/5.0');
    await page.goto(url);
    
    await page.type('.form-control.input-lg','https://fb.watch/gnurKNSZib/');
    await Promise.all([page.click('.btn.btn-primary.input-lg'), await page.waitForNavigation()]);
    
    const info = await page.evaluate(() => document.querySelector("#sdlink").getAttribute("href"));

    console.log(info);
    
    await browser.close();
}

start();