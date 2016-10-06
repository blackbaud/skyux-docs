---
layout: layout-sidebar
markdown: true
description: SKY UX performs manual and automated accessibility testing.  Learn about the testing and why we care about accessibility.
order: 4
---

# Accessibility

<i class="fa fa-universal-access fa-5x" style="float: right; margin: 0 1em 2em;"></i>
<<<<<<< HEAD
An accessible UX framework is an important part of Blackbaud’s commitment to deliver solutions that help drive positive change in the world. We endeavor to meet the W3C’s [Web Content Accessibility Guidelines 2.0](https://www.w3.org/TR/WCAG20/) Level A &amp; AA success criteria. In SKY UX, we build support for accessibility into our components.
=======
An accessible UX framework is an important part of Blackbaud’s commitment to deliver solutions that help drive positive change in the world. We endeavor to meet the World Wide Web Consortium’s [Web Content Accessibility Guidelines 2.0](https://www.w3.org/TR/WCAG20/) Level A &amp; AA success criteria. In SKY UX, we build support for accessibility into our components.
>>>>>>> blackbaud/learn

This page outlines the best practices to follow when you to contribute to SKY UX. And since accessibility is a work-in-progress, it also describes some known issues.

## Design for users with differing abilities

Focus on the [four principles that make experiences accessible](https://www.w3.org/TR/UNDERSTANDING-WCAG20/intro.html#introduction-fourprincs-head) for people with differing abilities. The design must be **perceivable** to all user senses. User interface components and navigation must be **operable** for users to interact with the interface. Information and the operation of the user interface must be **understandable**. And content must be **robust** enough for a wide variety of user agents, including assistive technologies, to reliably interpret it.

<<<<<<< HEAD
Evaluate your design ideas from the perspectives of users with disabilities. Become familiar with the [design issues and solutions for various disabilities](http://webaim.org/articles/userperspective/)
=======
Evaluate your design ideas from the perspectives of users with disabilities. Become familiar with the [design issues and solutions for various disabilities](http://webaim.org/articles/userperspective/).
>>>>>>> blackbaud/learn

### SKY UX design evaluation

We utilize a UI design accessibility checklist to evaluate new patterns and components for SKY UX. New components are reviewed against this checklist to ensure that they meet WCAG 2.0 Level A &amp; AA success criteria.

## Code using best practices

The following best practices help to ensure that SKY UX supports accessibility features and meets WCAG 2.0 Level A &amp; AA success criteria.

- Use structural semantic markup. This ensures that the role of elements and their relationships is available programmatically to user agents that help to communicate the content's meaning.
 - [HTML semantics overview](http://learn.shayhowe.com/html-css/getting-to-know-html/)
 - [Text-level semantics, microdata, and WAI-ARIA roles](http://learn.shayhowe.com/advanced-html-css/semantics-accessibility/)
- Apply [accessible techniques to HTML](http://webaim.org/articles/) forms, tables, links, media, and scripting, as well as to keyboard use.
- If you create custom interactive components or use HTML elements differently than the default semantics:
 1. Follow the [five rules of Accessible Rich Internet Applications](https://www.w3.org/TR/aria-in-html/#notes-on-aria-use-in-html) (ARIA) from the W3C recommendation.
 2. Follow the W3C's [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/2016/WD-wai-aria-practices-1.1-20160317/).

## Test for accessibility

SKY UX employs several methods to test for accessibility. To contribute to SKY UX, follow these methods for your feature before you submit it.

1. Run [aXe automated tests](https://github.com/dequelabs/axe-core) until they all pass. aXe is an open source library of automated accessibility tests that can identify potential issues for a subset of the WCAG 2.0 Level A &amp; AA success criteria. aXe is integrated into SKY UX.
2. Perform a review using the SKY UX [accessibility code review checklist](code-review) to identify potential accessibility problems that automated aXe testing could not evaluate.
3. Complete [manual keyboard tests](keyboard-testing/) to ensure that people can use your feature with a keyboard only.
4. Have users with various disabilities test your feature.

## Get involved

You can help make SKY UX accessible for everyone.

- Help fix [an existing accessibility issue](https://github.com/blackbaud/skyux/issues?q=is%3Aopen+is%3Aissue+label%3Aaccessibility).
- Highlight an accessibility issue on the [SKY UX Slack channel](https://blackbaud-skyux-slackin.herokuapp.com/), or file an issue with an accessibility label on the [SKY UX GitHub repository](https://github.com/blackbaud/skyux/issues).


## Known issues

<<<<<<< HEAD
We are currently in the process of auditing existing components and logging the [issues we identify in github](https://github.com/blackbaud/skyux/issues?q=is%3Aopen+is%3Aissue+label%3Aaccessibility). Additionally, we are working to update the SKY UX color system to meet color contrast criteria. The following elements do not currently meet the criteria:

=======
We are currently in the process of auditing existing components and logging the [issues that we identify in GitHub](https://github.com/blackbaud/skyux/issues?q=is%3Aopen+is%3Aissue+label%3Aaccessibility).

In addition, we are working to update the SKY UX color system to meet color contrast criteria. The following elements do not currently meet the criteria:
>>>>>>> blackbaud/learn
1. Link color
2. Primary buttons
3. Table headers
4. [Info and danger alerts](/components/alert/)
5. [Text colors](/components/text-colors/) for context
