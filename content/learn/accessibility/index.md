---
layout: layout-sidebar
markdown: true
description: SKY UX performs manual and automated accessbility testing.  Learn about what and why we care about Accessibility.
order: 4
---

# Accessibility


<p class="lead">Creating an accessible UX framework is an important part of Blackbaud’s commitment to deliver solutions that do good and help to drive positive change in the world.</p>
Happy Birthday!:  <i class="fa fa-birthday-cake"></i> <i class="fa fa-universal-access"></i>

We try our darnedest to meet the success criteria of the W3C’s Web Content Accessibility Guidelines 2.0 Level AA and build support for accessibility features into SKY UX.  This page outlines some of the practices and approaches we use and you'll need to follow if you'd like to contribute to SKY UX. Accessibility is a work-in-progress so you'll also find some of our known issues.


## How to create and contribute accessible experiences

Make it part your product development process throughout from early requirements and/or stories through to final quality processes.


### Design with users of differing abilities in mind

- Focus on the principles of what makes an experience accessible for different people. It must be [perceivable, operational, understandable, and robust](https://www.w3.org/TR/UNDERSTANDING-WCAG20/intro.html#introduction-fourprincs-head).
- Consider different perspectives of users with disabilities to evaluate your design solution. [Design issues and solutions for various disabilities](http://webaim.org/articles/userperspective/)

What we do for SKY UX
We utilize a UI design checklist when designing new patterns and components for SKY UX. New components are reviewed against this checklist and updated to meet WCAG 2.0 success criteria.

### Develop using best practices

- Use structural semantic markup
- Learn and apply accessible techniques for HTML forms, tables, links, media, scripting, and keyboard use
- If you're creating a custom interactive component or using HTML elements in different ways than their intended default semantics
 - Follow the [5 rules of ARIA](https://www.w3.org/TR/aria-in-html/#notes-on-aria-use-in-html) (Accessible Rich Internet Applications) from the W3C Recommendation
 - Follow W3C ARIA authoring practices

### Test for accessibility

We employ a number of steps to test SKY UX for accessibility. To contribute to SKY UX, follow these steps to test your feature before submitting it.

1. Run [aXe automated tests](https://github.com/dequelabs/axe-core) and have all passing. aXe is an open source library of automated accessibility tests which can identify a subset of  potential issues from the WCAG 2.0 success criteria. aXe is integrated into SKY UX.
2. Do a code review using our [accessibility code review checklist] to identify potential accessibility success criteria that cannot be evaluated using automated testing.
3. Complete a series of [manual keyboard tests] to ensure people will be able to use your feature with only a keyboard.
4. Test with users who use and experience the web with various disabilities.

## Get Involved

You can help make SKY UX experiences accessible for everyone.

- Help fixing [existing accessibility issues](https://github.com/blackbaud/skyux/issues?q=is%3Aopen+is%3Aissue+label%3Aaccessibility)
- Found an accessibility issue? You can discuss it on our [SKY UX slack channel](https://blackbaud-skyux-slackin.herokuapp.com/) or [file an issue and label it accessibility](https://github.com/blackbaud/skyux/issues).


## Known Issues
