---
name: Filtering
description: Describes different approaches to filtering that can be used depending on the context.
markdown: true
layout: layout-container
---

# Filtering

There are three filter patterns available in {{ stache.config.product_name_short }}, meant to accommodate increasing levels of filter complexity.  

## Inline filters
Always-visible filter controls in a tile header or list header, floated to the right side of the header. The filter is applied/updated immediately as soon as the user makes a selection. Filter controls for this type of filter should be simple interactions only, such as checkboxes or dropdowns. Complex multi-select filters should not be displayed using this pattern.

This pattern is appropriate if you have one or two simple filters that could apply. Having filters be persistently displayed allows users to quickly change filters without the additional step of having to invoke the filters through a explicit button.

## Expandable filters
Filters that are hidden by default but can be shown inline by pressing a “Filter” button in the header of a tile or list. See the example in the [grid](../../components/grids) component.

The filter panel can be hidden or shown by clicking the “Filter” button. If filters are applied, the button text and outline color change to green so the user knows the data is filtered.

Filter is applied/updated immediately as soon as the user makes a selection. Filter controls for this type of filter should be simple interactions only, such as checkboxes or dropdowns. Complex multi-select filters should not be displayed using this pattern.

This pattern is appropriate if you have up to four simple filters that could apply.

## Filters in a modal
Filters that are hidden by default but can be shown in a [modal](../../components/modal) by pressing a “Filter” button in the header of a tile or list. See the example in the [filter](../../components/filter) component.
 
All the normal filter controls can be placed on this modal, including simple filters as well as more complex multi-select filters that use the [select field](../../components/selectfield) control.

When filters are applied using this pattern, a box indicating the applied filters is shown on the page. The button text and outline color is also changed to green so the user knows the data is filtered.

Use this pattern:
* when there are four or more simple filters that might apply to a list or tile.
* if one or more of the possible filters is a complex multiselect filter or a filter that requires compound controls.
