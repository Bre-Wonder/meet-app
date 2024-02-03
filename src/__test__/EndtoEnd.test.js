// import puppeteer from 'puppeteer';
const puppeteer = require('puppeteer');

describe('show/hide an event\'s details', () => {

  // test 1
  test('An event element si collapsed by default', async () => {
    //COME BACK TO THIS LINE
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    
    await page.waitForSelector('.event');

    const eventDetails = await page.$('.event.details');
    expect(eventDetails).toBeNull();
    browser.close();
  });

});