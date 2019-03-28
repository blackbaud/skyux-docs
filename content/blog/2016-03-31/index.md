---
layout: layout-blog-post
author: Blackbaud-ToddRoberts
name: Design update - March 31, 2016
pubDate: Thursday, March 31, 2016
markdown: true
---

<bb-alert bb-alert-type="warning">This site describes <a href="https://angularjs.org/">the AngularJS (1.x) implementation</a> of the SKY UX framework. We still support this version, but it is in maintenance mode. We no longer develop features for this version, and we recommend the latest version of SKY UX instead. For more information, see <a href="https://developer.blackbaud.com/skyux">developer.blackbaud.com/skyux</a>.</bb-alert>


Design-oriented updates in SKY UX versions 1.5.10 - 1.5.13

<!-- more -->

## Recently completed

### [Checklist](http://skyux.developer.blackbaud.com/components/checklist/) / [Select field](http://skyux.developer.blackbaud.com/components/selectfield/)
Extended the Checklist component to include a single-select mode to accommodate HTML &lt;select&gt; style usage.

Created the Select field component to provide a consistent way of launching an item picker and displaying selected items. Generally this would contain a Checklist control but the component is flexible if an alternate item picker UI is needed.

Since this work has been completed, we have deprecated the Search field component (which was a wrapper for ui-select). The ui-select component was problematic on mobile devices and a couple other scenarios, and Select field + Checklist is our recommended solution.

### [Error](http://skyux.developer.blackbaud.com/components/error/)
Added pre-defined error types that will automatically populate default content:
* broken
* construction
* notFound

### [Toast](http://skyux.developer.blackbaud.com/components/toast/)
Extended to allow for manually-dismissed in addition to timed-out toasts. 

Added four types to use depending on the type of message being delivered.
* Success
* Info
* Warning
* Danger 

## In the works

### [Sortable list](https://github.com/blackbaud/skyux/issues/330)
RE NXT is building a sortable list component for cases when the user needs to be able to set an explicit order on a list of items. Many thanks to them for being the first team outside of SKY UX to contribute a full component! 

### [Card layout](https://github.com/blackbaud/skyux/issues/286)
The next in our project to create templates to help make consistent layouts easier. This particular work will facilitate future work on a card carousel and listbuilder card view.

### Design guide
We know that designing a SKY UX-consistent application when you are just starting to work with SKY UX is not the easiest task in the world. As part of the effort to change that we are building out the documentation library with more design-oriented information. You’ll be seeing this new content over the next few months so keep an eye on this site.

## Recently approved designs

### [Wizard](https://github.com/blackbaud/skyux/issues/360)
Adding an option for number-only steps as the responsive solution and for use in cases where the steps are not conducive to naming. 

### [Repeater layout](https://github.com/blackbaud/skyux/issues/124)
Add options for accordion-style and multi-open expandable repeater views.
