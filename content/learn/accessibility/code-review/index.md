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

<<<<<<< HEAD
1. Ensure that <code>alt</code> attributes on <code>&lt;img&gt;</code> elements accurately reflect the content and/or function of the image in the [context in which the image](http://webaim.org/techniques/alttext/#context) is used.
2. Ensure that button text values accurately describe the purpose(s) of the buttons.
3. Ensure that any images that are decorative have <code>role="presentation"</code> attribute.
=======
1. Ensure that <code>alt</code> attributes on <code>&lt;img&gt;</code> elements accurately reflect the content and/or function of the image in the [context that the image](http://webaim.org/techniques/alttext/#context) is used.
2. Ensure that button text values accurately describe the purpose of buttons.
3. Ensure that any decorative images have the <code>role="presentation"</code> attribute.
>>>>>>> blackbaud/learn

## Order

Ensure that the visual order of elements matches the DOM order of elements.

## Link purpose

<<<<<<< HEAD
Ensure links' text is descriptive of its target and purpose and can be distinguished from other links on the page. (See [Methods of indicating the purpose of a link](http://www.ssbbartgroup.com/blog/methods-of-indicating-the-purpose-of-a-link/) and [WCAG 2.0 technique for providing link text](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20160317/H30.html)) If it is not descriptive on its own, ensure one of the following is true:
   - its surrounding context aids understanding its purpose (e.g., link in sentence, table cell, heading immediately preceding)
   - it has a programmatic solution to augment the link text (e.g., off-screen text, <code>aria-describedby</code>)   

## Custom controls

For custom interactive controls that are used in a way that is not part of the HTML standard, ensure that the elements have the necessary ARIA roles, states, and properties.
(See [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/) for how to make components and behaviors accessible with ARIA roles, states and properties)
=======
Ensure that link text describes the target and purpose and that it can be distinguished from other links on the page. Review the [methods to indicate the purpose of a link](http://www.ssbbartgroup.com/blog/methods-of-indicating-the-purpose-of-a-link/) and the [WCAG 2.0 technique to provide link text](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20160317/H30.html). If the link text is not descriptive, ensure that one of the following conditions is true:
   - The surrounding context conveys the link's purpose. For example, the sentence, table cell, or heading immediately preceding the link can provide context.
   - A programmatic solution such as off-screen text or <code>aria-describedby</code> augments the link text.

## Custom controls

For custom interactive controls that are used in ways that are not part of the HTML standard, ensure that the elements have the necessary ARIA roles, states, and properties. For infromation about how to make components and behaviors accessible with ARIA roles, states, and properties, see [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices/).
>>>>>>> blackbaud/learn
