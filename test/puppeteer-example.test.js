const puppeteer = require('puppeteer')

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
    let browser = await puppeteer.launch(isDebugging())
    let page = await browser.newPage()
    
    page.emulate({
      viewport: {
        width: 500,
        height: 2400,
      },
      userAgent: ''
    })
    await page.goto('http://localhost:3000/');
    // const html = await page.$eval('.App-title', e => e.innerHTML);
    // expect(html).toBe('Welcome to React');
    // browser.close();
  }, 160000); // test timeout of 16s
})
