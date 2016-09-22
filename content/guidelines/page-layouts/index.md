---
name: Page layouts
description: Responsive, mobile-first page layouts provide flexibility while conforming to SKY UX standards.
markdown: true
layout: layout-container
---

# Page layouts

## Grid system
{{ stache.config.product_name_short }} layouts use [Bootstrap's responsive, mobile-first, fluid grid system](http://getbootstrap.com/css/#grid) that scales up to 12 columns as the size of devices or viewports increases. Our grid columns have 15px in padding on both sides to create 30px gutters between columns and 15px gutters at the edges of the grid. The columns are fluid, but the gutters remain constant. 

This grid system allows for a variety of page layouts but still conforms to our design and coding standards. 

## Responsive design
We rely the [column drop pattern](https://developers.google.com/web/fundamentals/design-and-ui/responsive/patterns/column-drop) to create responsive designs. This pattern utilizes a multi-column layout and the full width of the screen. The column drop pattern displays columns horizontally at full width and then stacks columns vertically when the screen width becomes too narrow for the content.

In this multi-column layout, the size of elements tends to remain consistent. Responsive design for various screen sizes relies on stacking columns. When and how to stack columns at different breakpoints varies by design, but navigation or the main content is generally placed at the top on narrow screens.

## Page layout templates
{{ stache.config.product_name_short }} is a flexible system that allows for a variety of page layouts to solve workflow needs while maintaining a consistent feel across an application.

The following sections describe the standard page layouts for designing with {{ stache.config.product_name_short }}. These layouts show how to package components to suit a variety of user needs. The layouts should cover most needs, but the system can accommodate new layouts as necessary.

### Work center 
The work center layout provides [a tile-based page](../../components/tiles) that surfaces time-sensitive information and allows users to quickly navigate to the most recent information within an application. It can contain [a page summary](../../components/pagesummary) to highlight the most important information, [a tabbed layout](../../components/tabset) to present different tasks, and [a carousel](../../components/carousel) to feature high-priority items.

![Work center page wireframe](../../../static/assets/img/guidelines/pagelayout/workcenter.png)

### List page
The list page layout provides a page that displays a list of related data. Lists present multiple line items vertically as a single continuous element. Common controls allow users to select the columns to display, sort the list, filter the list, search, and switch views. List pages can use tabs to display multiple lists or pre-filtered instances of a single list.

![List page wireframe](../../../static/assets/img/guidelines/pagelayout/list.png)

### Record page
The record page layout provides [a tile-based page](../../components/tiles) that displays [a page summary](../../components/pagesummary) and a main content area. The page summary at the top of the page provides an overview of a record. The main content area usually consists of two columns of tiles (or one column on extra small screens) that display information about the record in logical sections. The content to include in each area depends on the page's use case.

![Record page wireframe](../../../static/assets/img/guidelines/pagelayout/record.png)