const puppeteer = require('puppeteer');
const fs = require('fs/promises');


async function start() {

    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    await page.goto('https://tuberanker.com/youtube-tag-generator')
    
    await page.setViewport({ width: 1440, height: 764 })
    
    await page.waitForSelector('#search-input')
    await page.click('#search-input')
    
    await page.type('#search-input', 'apple')
    await page.click('#search-button');
    
    await page.waitForFunction(() => document.readyState === "complete");
    await page.waitForSelector('#keyword-container');
    const clickedData = await page.$eval('#keyword-container', el => el);
    
    console.log(clickedData);
    
    await browser.close()

}

start();