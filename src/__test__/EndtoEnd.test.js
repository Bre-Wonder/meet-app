import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {

  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
      timeout: 0
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  // test 1
  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event.details');
    expect(eventDetails).toBeNull();
  });

  //test 2
  test('User can expand an event to see its detail', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeDefined();
  });

  //test 3
  test('User can collaspe an even tto hide details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeNull();
  });

});