---
name: Select Items from Lists
icon: hand-pointer-o
description: A variety of controls are available to select items from a list.
markdown: true
layout: layout-container
---

<h1 class="bb-page-heading">Select Items from Lists</h1>

To provide a consistent experience for users when they select items from lists, use the following guidelines to determine which control to use when you create a list.

<h2 class="bb-section-heading"><a href="../../components/check">Radio Buttons</a></h2>

Use <a href="../../components/check">radio buttons</a> when you have 2-5 options and users can only select one value.

<h2 class="bb-section-heading">HTML &lt;select&gt; Field</h2>

Use an HTML <code>&lt;select&gt;</code> field when you have 6-20 values and users do not need to search for items.

<h2 class="bb-section-heading"><a href="../../components/check">Checkboxes</a></h2>

Use <a href="../../components/check">checkboxes</a> when you have 2-5 values and users can select multiple values.

<h2 class="bb-section-heading"><a href="../../components/selectfield">{{ stache.config.product_name_short }} Select Field Component</a></h2>

Use a {{ stache.config.product_name_short }} select field when:

* You have user-defined values because user-defined fields often accumulate many values and become too cumbersome for the other controls.
* You have more than 5 values and users can select multiple values.
* You have more than 20 values and users can only select one value.
* You need to display items with titles and descriptions.
