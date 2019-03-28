---
name: Select items from lists
description: A variety of controls are available to present lists and allow users to select list items.
markdown: true
layout: layout-container
---

<bb-alert bb-alert-type="warning">This site describes <a href="https://angularjs.org/">the AngularJS (1.x) implementation</a> of the SKY UX framework. We still support this version, but it is in maintenance mode. We no longer develop features for this version, and we recommend the latest version of SKY UX instead. For more information, see <a href="https://developer.blackbaud.com/skyux">developer.blackbaud.com/skyux</a>.</bb-alert>

<h1 class="bb-page-heading">Select items from lists</h1>

To provide a consistent experience for users to select items from lists, follow these guidelines to determine which control to use to create a list.

<h2 class="bb-section-heading"><a href="../../components/check">Radio buttons</a></h2>

Use <a href="../../components/check">radio buttons</a> when you have 2-5 options and users can only select one value.

<h2 class="bb-section-heading">HTML &lt;select&gt; field</h2>

Use an HTML <code>&lt;select&gt;</code> field when you have 6-20 values and users do not need to search for items.

<h2 class="bb-section-heading"><a href="../../components/check">Checkboxes</a></h2>

Use <a href="../../components/check">checkboxes</a> when you have 2-5 values and users can select multiple values.

<h2 class="bb-section-heading"><a href="../../components/selectfield">{{ stache.config.product_name_short }} select field</a></h2>

Use a {{ stache.config.product_name_short }} <a href="../../components/selectfield">select field</a> component when:

* You have user-defined values that can accumulate and become too cumbersome for the other controls.
* You have more than 5 values and users can select multiple values.
* You have more than 20 values and users can only select one value.
* You need to display items with titles and descriptions.
