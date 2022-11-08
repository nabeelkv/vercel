const puppeteer = require('puppeteer');
const fs = require('fs/promises');
// const cron = 'node-cron';

const url = "https://snapsave.app/";
const isFullPage = false;

async function start() {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    // page.setJavaScriptEnabled(false);
    // await page.setUserAgent('Mozilla/5.0 (Windows NT 5.1; rv:5.0) Gecko/20100101 Firefox/5.0');
    await page.goto(url);
    
    const grabElement = await page.waitForSelector('h1');
    const elementValue =  await page.$eval('h1', el => el.innerText);

    // 4. Clicking a button
    await page.click('#send');
    const grabElement2 = await page.waitForSelector('#alert');
    const clickedData = await page.$eval('#send', el => el.textContent);

    console.log(clickedData);
    

    //1. take screenshot
    // await page.screenshot({ path: 'google.png', fullPage: isFullPage });

    //2. create txt file adding names
    // const names = await page.evaluate(() => {
    //     return Array.from(document.querySelectorAll('.info strong')).map((x => x.textContent));
    // });
    // await fs.writeFile('names.txt', names.join('\r\n'));


    // 3. Save all images to a folder
    //    const photos = await page.$$eval("img", imgs => {
    //       return imgs.map(x => x.src );
    //    });

    //    for (const photo of photos) {
    //     const imagepage = await page.goto(photo);
    //     await fs.writeFile(photo.split('/').pop(), await imagepage.buffer());
    //    }


    // 4. Clicking a button
    // await page.click('#clickme');
    // const clickedData = await page.$eval('#data', el => el.textContent);
    // console.log(clickedData);


    // 4. sensitive info
    //   await page.type('#ourfield', 'blue');

    //   await Promise.all([page.click('#ourform button'), await page.waitForNavigation()]);

    //   const info = await page.$eval('#message', el => el.textContent);
    //   console.log(info);


    //close browser after job done
    await browser.close();
}

start();

// setInterval(start, 2000) //automate task 1

// var cron = require('node-cron');

// cron.schedule('*/10 * * * * *', start);