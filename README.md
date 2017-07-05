[![Build Status](https://travis-ci.org/klamping/wdio-starter-kit.svg?branch=master)](https://travis-ci.org/klamping/wdio-starter-kit)

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)

# WebdriverIO Starter Kit

Boilerplate repo for quick set up of WebdriverIO test scripts with TravisCI, Sauce Labs and Visual Regression Testing


## Includes:

- Visual Regression Service
- Mocha
- Chai with Expect global
- [Chai WebdriverIO](https://github.com/marcodejongh/chai-webdriverio)
- Node Notifier

## Debug Command Line Flag to adjust timeout

`DEBUG=true npm test`

## Configuration file flavors

By default, tests will run in Sauce Labs testing your production server.

To run the tests entirely locally, run:

`npm test -- wdio.conf.local.js`