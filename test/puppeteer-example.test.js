const puppeteer = require('puppeteer');

// dont proliferate new instances
// const browserWSEndpoint = 'a browser websocket endpoint to connect to';
// const browser = await puppeteer.connect({browserWSEndpoint});

const isDebugging = () => {
  const debugging_mode = {
    headless: false,
    slowMo: 250,
    devtools: true,
  }
  return debugging_mode
  // return process.env.NODE_ENV === 'debug' ? debugging_mode : {}
}
// "scripts": {
//   "start": "react-scripts start",
//   "build": "react-scripts build",
//   "test": "jest",
//   "debug": "NODE_ENV=debug npm test",
//   "eject": "react-scripts eject",
// }

describe('on page load', () => {
  it('h1 loads correctly', async() => {
    let freshInstance = false
    let browser 
    if (freshInstance) {
      browser = await browser.newPage()
    } else {
      const browserWSEndpoint = 'ws://127.0.0.1:63538/devtools/browser/bd02cf08-4a53-4d0e-a7a6-7523b88df9c3'
      browser = await puppeteer.connect({browserWSEndpoint});
    }
    let page = await browser.newPage()
    
    page.emulate({
      viewport: {
        width: 500,
        height: 2400,
      },
      userAgent: ''
    })
    await page.goto('http://localhost:3000/');
    await page.evaluate(() => { console.log('ayo') })
    await console.log(page.browser())
    // DONTCOMMIT dump
    // const fs = require('fs'); fs.writeFileSync('dump.json', JSON.stringify(JSON.decycle(page.browser()))); console.log('NOTE: object written to dump.json')
    // need to grab ws link from this dump
    console.log('hello')
    // const html = await page.$eval('.App-title', e => e.innerHTML);
    // expect(html).toBe('Welcome to React');
    // browser.close();
    browser.disconnect()
  }, 160000); // test timeout of 16s
})
