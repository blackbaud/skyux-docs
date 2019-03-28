---
layout: layout-blog-post
author: Blackbaud-ToddRoberts
name: Design update - February 19, 2016
pubDate: Friday, February 19, 2016
markdown: true
---

<bb-alert bb-alert-type="warning">This site describes <a href="https://angularjs.org/">the AngularJS (1.x) implementation</a> of the SKY UX framework. We still support this version, but it is in maintenance mode. We no longer develop features for this version, and we recommend the latest version of SKY UX instead. For more information, see <a href="https://developer.blackbaud.com/skyux">developer.blackbaud.com/skyux</a>.</bb-alert>


Design-oriented updates in SKY UX versions 1.5.0 - 1.5.9

<!-- more -->

## Recently completed

### [Page summary](http://skyux.developer.blackbaud.com/components/pagesummary/)
We have begun to create layout directives to streamline the design and development of features using core SKY UX layout patterns. The first of these is the Page Summary.

### [Alert](http://skyux.developer.blackbaud.com/components/alert/)
We wrapped the Bootstrap Alert component to simplify making alerts dismissible and follow SKY UX styling. 

### [Avatar](http://skyux.developer.blackbaud.com/components/avatar/)
This allows for uploading and displaying an image to identify a record. 

### [Error](http://skyux.developer.blackbaud.com/components/error/)
We created a standard layout and styling for error messaging. Now that this core piece is in place we can create a set of standard content for common error types. 

### [Date-range picker](http://skyux.developer.blackbaud.com/components/daterangepicker/)
We extended this control to allow a “Specific date range” option in cases where the predefined date ranges are insufficient. 

### Accessibility
There were some elements that were not visually differentiated when in their focused state. These were given a visual differentiation to help with usability overall, but particularly with keyboard interaction.
* Checkbox and radio button
* Context menu button
* Tile header icon buttons

## In the works

### Checklist
We are adding some new functionality to the [Checklist](http://skyux.developer.blackbaud.com/components/checklist/) control:
* Single-select mode
* Standard launcher control
* Standard selected-item view

### Avatar
There is some cleanup work going on around file sizes and error handling.

## Recently approved designs

### [Reorderable lists](https://github.com/blackbaud/skyux/issues/330)
Allows the user to manually reorder a list. 

### [Card layout](https://github.com/blackbaud/skyux/issues/286)
Standardized layout for Cards. 

### [Listbuilder view switcher](https://github.com/blackbaud/skyux/issues/287)
Allow the user to switch between different views in a listbuilder. 

### [Listbuilder card view](https://github.com/blackbaud/skyux/issues/288)
Card-based view for listbuilder. 

