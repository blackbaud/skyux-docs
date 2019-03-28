---
layout: layout-blog-post
author: Blackbaud-ToddRoberts
name: Design update - May 31, 2016
pubDate: Tuesday, May 31, 2016
markdown: true
---

<bb-alert bb-alert-type="warning">This site describes <a href="https://angularjs.org/">the AngularJS (1.x) implementation</a> of the SKY UX framework. We still support this version, but it is in maintenance mode. We no longer develop features for this version, and we recommend the latest version of SKY UX instead. For more information, see <a href="https://developer.blackbaud.com/skyux">developer.blackbaud.com/skyux</a>.</bb-alert>


Design-oriented updates in SkyUX versions 1.5.20 - 1.6.0

<!-- more -->

## Recently completed

### [Checklist - selected items](http://skyux.developer.blackbaud.com/components/checklist/)
We added a toggle to show only the selected items to make it easier for the user to ensure they have selected the correct items, particularly in cases where the list of options is very long. This filter overrides the other filter that are currently set to ensure that all selected items are showing.

### [Borders](http://skyux.developer.blackbaud.com/core-design/line-styles/)
To help with consistent usage of borders and dividers we created a SASS mixin to render the specified style of line. In most cases these borders and dividers should already be handled by the component you are using, but you may need them when building a new component.

### [Wizard - small viewports](http://skyux.developer.blackbaud.com/components/wizard/)
The navigation in the Wizard component did not scale well in smaller viewports, so we added the ability to specify different step names on large and small viewports. The primary usage would be to show step numbers only at small viewports, but it will allow any text if there is a different naming scheme that fits your scenario better. 

### CSS documentation
There were some elements that had been available in the CSS but not documented, which we have now documented to ensure consistent usage.

* [Buttons](http://skyux.developer.blackbaud.com/components/buttons/)
* [Labels](http://skyux.developer.blackbaud.com/components/labels/)
* [Text colors](http://skyux.developer.blackbaud.com/components/text-colors/)

### Design guide
The first batch of design guide content has been published. There are new sections on this site for Guidelines and Core design.

Guidelines are intended to inform design decisions where there are multiple components that could be used to solve the problem. This section is going to be our main focus for adding content in the short term.

Core design is largely for reference when creating prototypes or building new components. The documented element styling should be handled by existing components automatically. 

## In the works

### List builder view switching
We are going to be abtracting the functionality currently available in Grid \(filtering, find, etc.\) to make it available for different views of information such as repeater lists and maps. This is a big project so there will likely be pieces of it rolling out over the next few months.

### Full page task UIs
We have seen an increasing need to support more-complex tasks that can make full use of the real estate available on devices with large viewports. We are wrapping up design for the component to support this.

### Form/page action bars
A side effect of needing to support more complex tasks has been an expansion of the role the action bar plays within forms and pages - we have seen teams starting to include summary information in addition to actions. In order to ensure consistent usage we are working on a responsive design for a new action bar component. 

### Design guide
Now that the first batch of content is up we are going to focus on building out the content in the Guidelines section. 
