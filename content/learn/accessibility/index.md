---
layout: layout-sidebar
markdown: true
description: SKY UX performs manual and automated accessibility testing.  Learn about what and why we care about Accessibility.
order: 4
---

# Accessibility


<i class="fa fa-universal-access fa-5x" style="float: right; margin: 0 1em 2em;"></i>
An accessible UX framework is an important part of Blackbaud’s commitment to deliver solutions that help drive positive change in the world. We endeavor to meet the W3C’s [Web Content Accessibility Guidelines 2.0](https://www.w3.org/TR/WCAG20/) Level AA success criteria. In SKY UX, we build support for accessibility into our components.

This page outlines the best practices that you'll need to follow to contribute to SKY UX. Accessibility is a work-in-progress, so this page also describes some known issues.

## Design for users with differing abilities

Focus on the [four principles that make experiences accessible](https://www.w3.org/TR/UNDERSTANDING-WCAG20/intro.html#introduction-fourprincs-head) for people with differing abilities. The design must be **perceivable** to all user senses. User interface components and navigation must be **operable** for users to interact with the interface. Information and the operation of the user interface must be **understandable**. And content must be **robust** enough for a wide variety of user agents, including assistive technologies, to reliably interpret it.

Evaluate your design ideas from the perspectives of users with disabilities. Become familiar with the [design issues and solutions for various disabilities](http://webaim.org/articles/userperspective/)

### SKY UX design evaluation

We utilize a UI design accessibility checklist to evaluate new patterns and components for SKY UX. New components are reviewed against this checklist to ensure that they meet WCAG 2.0 Level AA success criteria.----

## Code using best practices

The following best practices help to ensure that SKY UX supports accessibility features and meets WCAG 2.0 Level AA success criteria.

- Use structural semantic markup. This ensures the role of elements and their relationships are available programmatically to user agents helping to communicate the content's meaning.
 - [HTML semantics overview](http://learn.shayhowe.com/html-css/getting-to-know-html/)
 - [Text-level semantics, microdata and WAI-ARIA roles](http://learn.shayhowe.com/advanced-html-css/semantics-accessibility/)
- Apply [accessible techniques to HTML](http://webaim.org/articles/) forms, tables, links, media, scripting, as well as keyboard use.
- To create custom interactive components or use HTML elements differently than the default semantics:
 1. Follow the [five rules of Accessible Rich Internet Applications](https://www.w3.org/TR/aria-in-html/#notes-on-aria-use-in-html) (ARIA) from the W3C Recommendation
 2. Follow the W3C's [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/2016/WD-wai-aria-practices-1.1-20160317/)

## Test for accessibility

SKY UX employs several methods to test for accessibility. To contribute to SKY UX, follow these methods for your feature before submitting it.

1. Run [aXe automated tests](https://github.com/dequelabs/axe-core) until they all pass. aXe is an open source library of automated accessibility tests that can identify potential issues for a subset of the WCAG 2.0 Level AA success criteria. aXe is integrated into SKY UX.
2. Perform a review using the SKY UX [accessibility code review checklist](code-review) to identify potential accessibility problems that automated aXe testing could not evaluate.
3. Complete [manual keyboard tests](keyboard-testing/) to ensure that people can use your feature with a keyboard only.
4. Have users with various disabilities test your feature(s).

## Get involved

You can help make SKY UX accessible for everyone.

- Help fix [existing accessibility issues](https://github.com/blackbaud/skyux/issues?q=is%3Aopen+is%3Aissue+label%3Aaccessibility).
- Highlight an accessibility issue that you find on the [SKY UX Slack channel](https://blackbaud-skyux-slackin.herokuapp.com/). Or, file an issue with an accessibility label on the [SKY UX GitHub repository](https://github.com/blackbaud/skyux/issues).


## Known issues

Coming...
