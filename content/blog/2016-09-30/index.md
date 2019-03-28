---
layout: layout-blog-post
author: Blackbaud-ToddRoberts
name: Design update - September 30, 2016
pubDate: Friday, September 30, 2016
markdown: true
---

<bb-alert bb-alert-type="warning">This site describes <a href="https://angularjs.org/">the AngularJS (1.x) implementation</a> of the SKY UX framework. We still support this version, but it is in maintenance mode. We no longer develop features for this version, and we recommend the latest version of SKY UX instead. For more information, see <a href="https://developer.blackbaud.com/skyux">developer.blackbaud.com/skyux</a>.</bb-alert>


Design-oriented updates in SkyUX versions 1.7.2 - 1.7.5

<!-- more -->

## Recently completed

### [Sort](http://skyux.developer.blackbaud.com/components/sort/)

We added a component to standardize the sorting interaction across list types. Previously Grid was the only component to support sorting, but we needed a way to sort Repeaters and the upcoming card matrix view.

### [Grid](http://skyux.developer.blackbaud.com/components/grids/)

#### Infinite scroll

Added the new [Infinite scroll](http://skyux.developer.blackbaud.com/components/infinitescroll/) functionality.

#### Sort

Added an option to use the new Sort functionality.

### [Select field](http://skyux.developer.blackbaud.com/components/selectfield/)

#### Inline clear

Previously a user would have to open the select field to clear the selection when using single-select mode. We added the ability to clear the field without having to open it.

#### Displaying selected

Previously the selected items in multi-select mode were stacked vertically, which took up quite a bit of space. We updated selected items to be displayed inline so that the view is more compact.

### Guidelines

We added several new guidelines including [Filtering](http://skyux.developer.blackbaud.com/guidelines/filters/), [Forms](http://skyux.developer.blackbaud.com/guidelines/forms/) and [Page layouts](http://skyux.developer.blackbaud.com/guidelines/page-layouts/).

## In the works

### [Listbuilder](https://github.com/blackbaud/skyux/projects/1)

Work is continuing on listbuilder, with the card matrix view currently in progress and the action bar coming up soon.

## Completed designs

### [Inline add/edit](https://github.com/blackbaud/skyux/issues/814)

To support the overall principle of keeping the user in context as much as possible we will be building out components to support inline adding and editing of simple records.

## Upcoming designs

#### Call to action buttons

We are working on an attention-grabbing call to action button to use when you want to provide users with an extra push to get started with a task.

#### Simple confirmation dialog

The styling of the Modal component is a bit heavy for simple confirmation dialogs so we are looking at a more lightweight dialog styling for these cases.
