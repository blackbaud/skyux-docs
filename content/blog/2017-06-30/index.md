---
layout: layout-blog-post
author: Blackbaud-ToddRoberts
name: Design update - June 30, 2017
pubDate: Friday, June 30th, 2017
markdown: true
---

<bb-alert bb-alert-type="warning">This site describes <a href="https://angularjs.org/">the AngularJS (1.x) implementation</a> of the SKY UX framework. We still support this version, but it is in maintenance mode. We no longer develop features for this version, and we recommend the latest version of SKY UX instead. For more information, see <a href="https://developer.blackbaud.com/skyux">developer.blackbaud.com/skyux</a>.</bb-alert>


SkyUX release 1.15.3 and SkyUX 2 releases 2.0.0-beta.30 – 2.0.0-beta.33

<!-- more -->

## Recently completed

### Ported to SkyUX 2

-   Option to make [Repeater](https://developer.blackbaud.com/skyux2/components/repeater) rows selectable

-   [Email validation](https://developer.blackbaud.com/skyux2/components/email-validation)

-   Specifying the size of a [Modal](https://developer.blackbaud.com/skyux2/components/modal)

### [Dropdown](https://developer.blackbaud.com/skyux2/components/dropdown) (SkyUX 2)

-   We added an option to specify a dropdown as a primary button, giving it styling as such. Guidelines for when to use primary or regular are the same as for standard buttons.

-   Positioning of the dropdown menu will now change based on the amount of space available. This should prevent the menus from getting cut off when they are at the bottom or far right of the screen.

## In the works 

### Color & typography changes (SkyUX and SkyUX 2)

We have started the work to update our color scheme and typography to improve accessibility. Look for release candidate builds in the next week or two. This work will include a lot of breaking visual changes if you are using visual regression testing, so allow time to update those tests as well as visually review your application to check for inconsistencies with any custom styling you have done.
