---
description: SKY UX code review steps for accessibility
layout: layout-sidebar
markdown: true
name: Code review
order: 41
showHeadings: false
showInNav: true
---

<bb-alert bb-alert-type="warning">This site describes <a href="https://angularjs.org/">the AngularJS (1.x) implementation</a> of the SKY UX framework. We still support this version, but it is in maintenance mode. We no longer develop features for this version, and we recommend the latest version of SKY UX instead. For more information, see <a href="https://developer.blackbaud.com/skyux">developer.blackbaud.com/skyux</a>.</bb-alert>

# Code review checklist for accessibility

## Text equivalents for non-text elements

1. Ensure that <code>alt</code> attributes on <code>&lt;img&gt;</code> elements accurately reflect the content and/or function of the image in the [context that the image](http://webaim.org/techniques/alttext/#context) is used.
2. Ensure that button text values accurately describe the purpose of buttons.
3. Ensure that any decorative images have the <code>role="presentation"</code> attribute.

## Order

Ensure that the visual order of elements matches the DOM order of elements.

## Link purpose

Ensure that link text describes the target and purpose and that it can be distinguished from other links on the page. Review the [methods to indicate the purpose of a link](http://www.ssbbartgroup.com/blog/methods-of-indicating-the-purpose-of-a-link/) and the [WCAG 2.0 technique to provide link text](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20160317/H30.html). If the link text is not descriptive, ensure that one of the following conditions is true:
   - The surrounding context conveys the link's purpose. For example, the sentence, table cell, or heading immediately preceding the link can provide context.
   - A programmatic solution such as off-screen text or <code>aria-describedby</code> augments the link text.

## Semantic markup

Ensure that proper semantic HTML elements are used to describe the content of the page or component. For example, <code>&lt;ul&gt;</code> unordered lists are used for lists, <code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code> are used in order for headings, <code>&lt;nav&gt;</code> is used for navigation.

See [Getting to know HTML](http://learn.shayhowe.com/html-css/getting-to-know-html/) and [Extending Semantics and Accessibility](http://learn.shayhowe.com/advanced-html-css/semantics-accessibility/) for details of semantic markup.

## Custom controls

For custom interactive controls that are used in ways that are not part of the HTML standard, ensure that the elements have the necessary ARIA roles, states, and properties. For information about how to make components and behaviors accessible with ARIA roles, states, and properties, see [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices/).
