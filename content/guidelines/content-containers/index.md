---
name: Content containers
description: Describes the contexts in which to use different types of content containers.
markdown: true
layout: layout-sidebar
---

# Content containers

## Dividing a page into sections of related content

### [Tile](../../components/tiles)

A container for dividing and grouping categories heterogeneous content on a page. DO NOT use tiles to represent individual items in a set of items - use cards if you want to contain items in a list within individual bounding boxes. Content inside each tile can (and often will) vary widely. Tiles can be reordered and repositioned within the page. Tiles can be expanded and collapsed, and their default state can be determined by the situation.

Tiles can contain toolbars to house actions related to their content.  

### [Tabs](../../components/tabset)

A container for dividing large subsets of content on a page. A sets of tabs should serve as categories of page content, not as a list of similar items. The contents of each tab can be considered like a page and may contain any other container or arrangement of content.

## Presenting instances of a collection of related items

### [Card](../../components/card)

This is a list of items that uses set of rectangular card containers, instead of rows. The card decks can appear in different layouts, such as grids or carousels. Content and presentation can be determined per card list instance. Cards can be selected (multi-select via checkbox) for bulk actions, and can also contain item-specific actions in an action bar or context menu.

If you are using cards within a tile, consider using them with the [carousel](../../components/carousel) component which accounts for the width of its container.

### [Repeater list](../../components/repeater)

A list of items that does not use columns. The content and presentation inside the row can be determined per list. Rows in a repeater list can be selected (multi-select via checkbox) for bulk actions. Each row can contain hyperlinks (usually on the “primary” label), but row-specific actions should be collected into the row's context menu.

Repeaters can be used in full-page formats, tabs, tiles, or dialogues.

For cases where the user needs to manually sort a list, the [reorder](../../components/reorder) component enables this for
a simple repeater list.  

### [Grid](../../components/grids)

A list of items in table format (i.e. defined columns). Content and presentation of each row and column can be determined per list, but must conform to column breakdowns. Columns can be shown/hidden/reordered, and content can be sorted based on values inside specific columns.

Grids commonly use a toolbar containing search, filter controls, column selection, and other actions.

Grids should generally be used in full-page formats or inside of full-page tabs. When designing within a smaller container such as a tile, try using a repeater instead since they scale down better than grids.

## Revealing content that is not always visible

### [Modal](../../components/modal)

A container to focus the user's attention on a specific task. A modal is appropriate in scenarios that meet one or more of these conditions:

* The task cannot be completed until the user provides more information or makes additional choices
* The task is self-contained and does not need the context of the underlying page
* The task is secondary to the purpose of the underlying page
* The task interface is too complex to fit within the container from which it was invoked
* The interface from which the task is invoked would be too distracting for the user to efficiently complete the task inline

### [Popover](../../components/popover)

Used to show small chunks of information that are only occasionally relevant to the user. If the content is relevant most of the time it should be presented in-page instead. If the amount of content would require scrolling on a mobile device, use a modal instead.
