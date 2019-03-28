---
layout: layout-blog-post
author: Blackbaud-ToddRoberts
name: Design update - October 31, 2016
pubDate: Monday, October 31, 2016
markdown: true
---

<bb-alert bb-alert-type="warning">This site describes <a href="https://angularjs.org/">the AngularJS (1.x) implementation</a> of the SKY UX framework. We still support this version, but it is in maintenance mode. We no longer develop features for this version, and we recommend the latest version of SKY UX instead. For more information, see <a href="https://developer.blackbaud.com/skyux">developer.blackbaud.com/skyux</a>.</bb-alert>


Design-oriented updates in SkyUX versions 1.7.6 - 1.8.0

<!-- more -->

## Recently completed

### [Listbuilder](http://skyux.developer.blackbaud.com/components/listbuilder/)

We’ve launched the Listbuilder component, providing a more scalable, responsive and extensible set of functionality compared to the existing Grid component. This first release includes view-switching capability and has support for Repeater, Card and custom views. More views will be coming in the future.

### [Carousel](http://skyux.developer.blackbaud.com/components/carousel/)

There are new methods on the Carousel component that make it easier to find and/or remove a specific item from the carousel. The UI implementation for removing an item would depend on the design making use of it; there is not built-in UI for removing items at this point. Thanks to Matt Bell for this contribution!

## In the works

### Listbuilder

We are continuing work on Listbuilder. The current work is to build a new docked [action bar](https://github.com/blackbaud/skyux/issues/598) that can be used for both Listbuilder and Modal.

## Completed designs

### [Simple confirmation dialog](https://github.com/blackbaud/skyux/issues/883)

The existing Modal component is visual overkill for simple confirmation dialogs. We will be building a stripped down dialog to focus the user on the straightforward question being asked.

### [Big action buttons](https://github.com/blackbaud/skyux/issues/886)

These are intended for pages where a call to action is the primary focus of the page. In those cases it is awkward and ineffective to display multiple small standard buttons, and this new component will make the calls to action stand out much more.

### [Invoking inline help](https://github.com/blackbaud/skyux/issues/887)

This will standardize the way user assistance is invoked inline. The design is based on the approach RE NXT has taken, which resulted in higher usage (and many fewer support calls) than did the existing Help Button component. It will also accommodate a broader set of usage than the Help Button, as it can be used to call a Popover or a custom help service (for developers not using Blackbaud’s Help service).

## Upcoming designs

### Vertical tabs

We are working on a design for vertically-oriented tabs to support use cases where horizontal tabs do not scale appropriately and cases where tabs need to be grouped.

### Split view

We are working on a split list view (list of items on the left, work space on the right) to support scenarios where a user needs to complete a task for multiple items in a list.
