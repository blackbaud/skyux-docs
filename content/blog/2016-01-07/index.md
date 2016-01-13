---
layout: layout-blog-post
author: Blackbaud-BobbyEarl
name: Building <%= stache.config.product_name_short %>
pubDate: Thursday, January 7, 2016
markdown: true
---

As the {{ stache.config.product_name_short }} codebase is now officially Open Source and in a public GitHub repository, I wanted to walk through what a typical contribution and release look like.  

This is meant to be a fairly high-level overview.  The example workflow shown on the Travis CI homepage is almost identical to our implementation, aside from the deployment endpoint used.  It still makes for a nice visual representation of our processes.

<!-- more -->

**Example contributing workflow**

![Travis Pull Request](/assets/img/blog/travis-pull-request.png)

**Example releasing workflow**

![Travis Push](/assets/img/blog/travis-push.png)

### Contributing

The steps necessary to clone and contribute to the {{ stache.config.product_name_short }} repo are already [documented in the README](https://github.com/blackbaud/skyux#contributing).  Assuming you follow those instructions, once you submit a pull request against the master branch, GitHub webhooks trigger the following services to run in parallel.

0. [CLA Assistant](https://cla-assistant.io) checks to see if all contributors in the pull request have signed the Blackbaud CLA.  If not, they are emailed with a direct link to sign and the pull request is flagged accordingly.

0. [Travis CI](https://travis-ci.org/blackbaud/skyux) is the workhorse for our process.  Essentially it's a Linux virtual machine that clones our repo and provides a rich API to control the VM.  Using our [.travis.yml](https://github.com/blackbaud/skyux/blob/master/.travis.yml) allows us to pull in the necessary dependencies and kick off our test suite, which includes linting, code coverage, and both JavaScript and visual regression tests on BrowserStack  (this is a large topic and deserves a post of its own, so stay tuned for future updates describing our testing setup).  Last, a full build is performed.

0. Code coverage results are sent to [Coveralls.io](https://coveralls.io/github/blackbaud/skyux), which in turn updates the status of the pull request.  Based on our settings, we require 100% code coverage.  Anything below this will cause the pull request to fail.

<p class="alert alert-info">If the pull request is coming from a fork, our [Savage Fork](https://github.com/blackbaud-sky-savage/sky) implementation takes over and runs the tests in Travis CI.  This is necessary in order to maintain environment security in Travis CI and is [well documented](https://github.com/twbs/savage).</p>

### Releasing

Thanks to the robust Travis CI platform, we're able to use the same tools and workflow to perform releases.  The contributing criteria must first be met.  If those steps pass, Travis CI checks the commit for two additional criteria - branch name and commit message syntax.

0. The resulting build files are first committed back to the repository int he same branch (master or rc-) that initiated the release.  They're committed with a specific commit message that causes Travis to ignore it.

0. The build files are also committed to the [releases repository](https://github.com/blackbaud/skyux-releases).  This repo is directly tied to an Azure Website, which ultimately serves as the origin to the {{ stache.config.product_name_short }} CDN.  This update is automated and driven by [Stache](https://github.com/blackbaud/stache).

0. Last, as long as it's not a pre-release, the documentation site is updated.  This is controlled via the [skyux-docs repository](https://github.com/blackbaud/skyux-docs).  Just as with releases, an update to the docs repo will cause an Azure Website to automatically regenerate, also utilizing Stache.

### Summary

With every service and toolset described above, there is undoubtably an alternative.  All software development is subject to change, but front-end development seems especially susceptible to this.  Each solution has their own strengths.  At the time of implementation, we evaluated our options, and made a selection - aiming for the right tool for the job.

Stay tuned for future posts on deeper dives into some of the more intricate areas of our development cycle, such as our testing strategy.
