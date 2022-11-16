const { setCommonPlugins } = require('@codeceptjs/configure');
const { output } = require('codeceptjs');
const path = require("path");
const directoryName = __dirname;


// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './tests/*.test.js',
  output: './allure-results',
  helpers: {
    Appium: {
      app: directoryName + '\\app\\calc.apk',
      platform: 'Android',
      device: 'emulator'
    }
  },
  include: {
    I: './steps_file.js',
    calculatorPage: './pages/calculatorPage.js'
  },
  plugins: {
    allure: {
      "enabled": true,
      outputDir: 'allure-results/'
    },
    screenshotOnFail: {
      enabled: true
    }
  },
  bootstrap: null,
  mocha: {},
  name: 'CodeceptJS-Appium-Demo'
}