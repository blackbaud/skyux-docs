---
description: SKY UX code review steps for accessibility
layout: layout-sidebar
markdown: true
name: Code review
order: 41
showHeadings: false
showInNav: true
---

# Code review checklist for accessibility

## Text equivalents for non-text elements

1. Ensure that <code>alt</code> attributes on <code>&lt;img&gt;</code> elements accurately reflect the content and/or function of the image in the [context in which the image](http://webaim.org/techniques/alttext/#context) is used.
2. Ensure that button text values accurately describe the purpose(s) of the buttons.
3. Ensure that any images that are decorative have <code>role="presentation"</code> attribute.

## Order

Ensure that the visual order of elements matches the DOM order of elements.

## Link purpose

Ensure links' text is descriptive of its target and purpose and can be distinguished from other links on the page. (See [Methods of indicating the purpose of a link](http://www.ssbbartgroup.com/blog/methods-of-indicating-the-purpose-of-a-link/) and [WCAG 2.0 technique for providing link text](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20160317/H30.html)) If it is not descriptive on its own, ensure one of the following is true:
   - its surrounding context aids understanding its purpose (e.g., link in sentence, table cell, heading immediately preceding)
   - it has a programmatic solution to augment the link text (e.g., off-screen text, <code>aria-describedby</code>)   

## Custom controls

For custom interactive controls that are used in a way that is not part of the HTML standard, ensure that the elements have the necessary ARIA roles, states, and properties.
(See [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/) for how to make components and behaviors accessible with ARIA roles, states and properties)
