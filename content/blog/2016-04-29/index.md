---
layout: layout-blog-post
author: Blackbaud-ToddRoberts
name: Design update - April 29, 2016
pubDate: Friday, April 29, 2016
markdown: true
---

<bb-alert bb-alert-type="warning">This site describes <a href="https://angularjs.org/">the AngularJS (1.x) implementation</a> of the SKY UX framework. We still support this version, but it is in maintenance mode. We no longer develop features for this version, and we recommend the latest version of SKY UX instead. For more information, see <a href="https://developer.blackbaud.com/skyux">developer.blackbaud.com/skyux</a>.</bb-alert>


Design-oriented updates in SkyUX versions 1.5.14 - 1.5.19

<!-- more -->

## Recently completed

### [Font classes](https://github.com/blackbaud/skyux/blob/master/scss/_type.scss)
We added a set of semantic font classes to automatically provide appropriate styling based on the type of text being communicated. These should be used in place of applying styles directly to text blocks. 

### [Reorder](http://skyux.developer.blackbaud.com/components/reorder/)
Allows the user to manually sort a list of items. 

### [Card layout](http://skyux.developer.blackbaud.com/components/card/)
Provides a standardized layout for cards. This will facilitate future work on a card carousel and listbuilder card view.

### [Repeater layout](http://skyux.developer.blackbaud.com/components/repeater/)
Provides a standardized layout for repeater lists. This will facilitate future work on a listbuilder repeater view.

### [Checklist filters](http://skyux.developer.blackbaud.com/components/checklist/)
Due to the nature of the data that tends to be used in checklists there was a need to be able to flip between a superset and subset of items, for example including or excluding inactive records. We added the option to include a toggle to accommodate this.

The control that had been used for category filters was problematic in smaller viewports. We changed category filters to use a dropdown so that they scale better to smaller devices and to provide space for the aforementioned subset toggle.  


## In the works

### Design guide
We are getting ready to publish the first batch of design-oriented documentation. Look for it in the next couple weeks on this site.
