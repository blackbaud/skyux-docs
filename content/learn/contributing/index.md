---
layout: layout-sidebar
markdown: true
name: Contribute
description: We encourage contributions from all SKY UX users. Learn about our coding conventions.
order: 3
---

# Contribute

We highly encourage contributions from all {{ stache.config.product_name_short }} users. We just ask that you follow the coding conventions already established in the existing code and that you write the appropriate documentation and unit tests for your feature.

## Get the code

1. Fork the master branch into your own repo.
2. Create a branch named after the feature that you will contribute (.e.g. my-new-feature).
3. Clone your repo locally.
4. Run `npm install` from your local repo's directory to install all required dependencies.
5. Run `grunt build` to do your initial build. As you write your code, the individual pieces will be built (see step 1 below).

## Write the code

1. Launch a command prompt, `cd` to the folder where you cloned your branch, then run `grunt watch`.  
2. Write your code, documentation, and unit tests. All code must have 100 percent unit test coverage and include documentation on how to use the feature in order for the pull request to be accepted.  

  - Include documentation for each {{ stache.config.product_name_short }} module that you create within your source code. We use JSDoc-style comments at the top of our JavaScript files to generate Markdown documentation. You can generate the Markdown documentation by running `grunt docs` from the command line.
  - Documentation should include demo HTML and demo JS in a folder called `docs` under your feature's folder in `src/js`. As you update these files, the `grunt watch` task generates documentation that you can find under `demo/build`. The documentation page needs to be hosted by a web server; you can use a Node package like [http-server](https://github.com/indexzero/http-server) to start a web server in any folder on your drive.
  - Unit tests should be located in a folder called `test` under your feature's folder in `src/js` and should consist of one or more JavaScript files named `<featurename>.spec.js`. As you write unit tests or change code, the `grunt watch` task runs your unit tests and generates code coverage. Code coverage reports can be located under `coverage/<browser version>/index.html` and can be launched straight from disk.
  - You can use our code analysis tool called [grunt-skylint](https://github.com/blackbaud/grunt-skylint) to validate {{ stache.config.product_name_short }} components.


## Visual regression tests

We run visual regression tests through Browserstack using [webdrivercss](https://github.com/webdriverio/webdrivercss). To run these tests against a local Selenium server, you need to install [GraphicsMagick](http://www.graphicsmagick.org/) on your system for image processing.

### Mac OS X using [Homebrew](http://mxcl.github.io/homebrew/)
```sh
$ brew install graphicsmagick
```

### Ubuntu using apt-get
```sh
$ sudo apt-get install graphicsmagick
```

### Windows

Download and install executables for [GraphicsMagick](http://www.graphicsmagick.org/download.html). Please make sure to install the right binaries desired for your system (32bit vs 64bit).

You also need a local Selenium instance.
```
npm install -g selenium-standalone
selenium-standalone install
selenium-standalone start
```

After you install these prerequisites, you can run the visual regression tests using `grunt visualtest`, which creates and compares screenshots in the `webdriver-screenshotslocal` folder. You can run specific test suites using the `--components` option to specify the name of the components to test (e.g. `grunt visualtest --components=actionbar,alert`).

## Submit the code

1. Commit and push your changes to your repo.
2. Submit a pull request

# File issues

To file a bug, just go to the [Issues](https://github.com/blackbaud/skyux/issues) page and create an issue. We operate under the expectation that we will close bugs within two weeks of filing. On the newly created issue, you can subscribe to notifications to receive emails about commits, comments, and releases related to the bug.
