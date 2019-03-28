---
layout: layout-blog-post
author: Blackbaud-ToddRoberts
name: Design update - July 29, 2016
pubDate: Thursday, July 29, 2016
markdown: true
---

<bb-alert bb-alert-type="warning">This site describes <a href="https://angularjs.org/">the AngularJS (1.x) implementation</a> of the SKY UX framework. We still support this version, but it is in maintenance mode. We no longer develop features for this version, and we recommend the latest version of SKY UX instead. For more information, see <a href="https://developer.blackbaud.com/skyux">developer.blackbaud.com/skyux</a>.</bb-alert>


Design-oriented updates in SkyUX versions 1.6.5 - 1.6.8

<!-- more -->

## Recently completed

### [Search input](http://skyux.developer.blackbaud.com/components/search/)

As part of the list builder work we have created a standalone Search input to start standardizing the search interaction across components.

### [Grid – applied filters display](http://skyux.developer.blackbaud.com/components/grids/)

We added an option to disable the ability to clear filters applied within the Grid applied filters view. This helps support usage of Grid in scenarios that start with a prefiltered list with parameters that shouldn’t be altered.

## In the works

### [List builder view switching](https://github.com/blackbaud/skyux/issues/287)

We are continuing with the foundational work to enable list builder view switching. The next piece we are picking up is filtering, changing from a flyout to a modal interaction to allow for better scaling.

### [Full page task UIs](https://github.com/blackbaud/skyux/issues/658)

While adding full page modals, we are also doing some work to allow Grids with docked headers to be used within a modal.

### Guidelines

We are working on some higher-level guidelines, including page layout and content containers.

## Completed designs

### Select field

There are a few changes we will be making to the select field, including the way [selected options are displayed](https://github.com/blackbaud/skyux/issues/667) in multi-select mode and [quicker clearing](https://github.com/blackbaud/skyux/issues/675) in single-select mode.

### [Time picker](https://github.com/blackbaud/skyux/issues/693)

There is some ongoing work to determine how time zones will be handled, but the bulk of the design is settled.