---
name: Filtering
description: Filter patterns provide guidance on how to display filter options in various scenarios.
markdown: true
layout: layout-sidebar
---

# Filtering

{{ stache.config.product_name_short }} provides three filter patterns to accommodate different filter scenarios.  

## Inline filters
Inline filters display always-visible controls to the right of tile or list headers. The filter is applied immediately after users make selections. This pattern only supports simple filter controls such as checkbox toggles and dropdowns.

This pattern is appropriate for scenarios where users can only apply one or two simple filter options. Since the filter controls are always visible, users can quickly apply filter options without invoking them through a button.

## Expandable filters
Expandable filters hide filter controls by default and allow users to display them inline by clicking "Filter" buttons in tile or list headers. For example, [the grid component](../../components/grids) can display a "Filter" button in the grid header. After users apply filters, the "Filter" button's text and outline change to green to indicate that the data is filtered.

The filter is applied immediately after users make selections. This pattern only supports simple filter controls such as checkbox toggles and dropdowns.

This pattern is appropriate for scenarios where users can apply up to four simple filter options.

## Filters in a modal
Filters in a modal hide filter controls by default and allow users to display them in [a modal](../../components/modal) by clicking "Filter" buttons in tile or list headers. For example, [the filter component](../../components/filter) can display a "Filter" button in a list header. After users apply filters, boxes on the page indicate the applied filters and the "Filter" button's text and outline change to green to indicate that the data is filtered.

Filters in a modal can include both simple filter controls and more complex controls such as [the select field component](../../components/selectfield).

This pattern is appropriate for scenarios where users can apply more than four simple filter options or where one or more complex filter controls are necessary.
