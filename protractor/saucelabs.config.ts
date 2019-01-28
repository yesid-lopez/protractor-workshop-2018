import { Config, browser } from 'protractor';

import { reporter } from './helpers/reporter';

const firefoxConfig = {
  browserName: 'firefox',
  platform: 'linux',
  name: 'firefox-tests',
  shardTestFiles: true,
  maxInstances: 1
};

// const chromeConfig = {
//   browserName: 'chrome',
//   version: 'latest',
//   name: 'chrome-tests',
//   shardTestFiles: true,
//   maxInstances: 1
// };

const multiCapabilities = [firefoxConfig];
// const multiCapabilities = [chromeConfig, firefoxConfig];

export const config: Config = {
  multiCapabilities,
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  SELENIUM_PROMISE_MANAGER:false,
  getPageTimeout: 30000,
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
    browser.manage().timeouts().implicitlyWait(0);
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
  capabilities: {
    name: 'UI Workshop',
    browserName: 'chrome',
    chromeOptions: {
      args: ['--disable-popup-blocking', '--no-default-browser-check', '--window-size=800,600'],
      prefs: { credentials_enable_service: false }
    }
  },
};
