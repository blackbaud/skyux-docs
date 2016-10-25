---
name: User assistance
description: Describes the ways in which the user can access help documentation or other explanatory content.
markdown: true
layout: layout-container
---

# User assistance


## Persistent inline assistance

Sometimes a small amount of explanatory text can help users understand the task they are about to perform. This can be especially helpful if the impact of the user’s decisions will have a system-wide impact that might not be obvious from the controls in the immediate task the user is performing, or if the task is complex and infrequently performed. Limit this text to a sentence or two. A wall of text is almost always going to be ignored.

Persistent blocks of text can become cluttering, particularly on an interface that will see heavy traffic. If you are designing for a frequently-done task, consider another approach. Over time, that text will have minimal value but will still be taking up screen space. To help avoid visual clutter use [text styling](http://skyux.developer.blackbaud.com/core-design/typography/) to de-emphasize the text.

## Invoked inline assistance

It should be fairly rare to need persistent text explanations on the screen. For cases where explanatory text will be useful the first couple of times a user does a task but the ramifications of a mistake are small you can use an [assistance button](http://skyux.developer.blackbaud.com/components/helpbutton/) to invoke explanatory documentation. Depending on the complexity of the documentation it may be shown in a [popover](http://skyux.developer.blackbaud.com/components/popover/) or in the [help panel](http://skyux.developer.blackbaud.com/components/help/). This will allow the user access to the assistance when needed but avoid most of the visual clutter associated with persistent text.

## Page- and modal-level help

A user performing a complex task may benefit from more comprehensive documentation that covers the task as a whole and the components of the task. Since this documentation is applicable to more than a single field it should be invoked at the page or modal level,depending on the context. In Blackbaud products this is done using the [help service](http://skyux.developer.blackbaud.com/components/help/) invoked from the [omnibar](http://skyux.developer.blackbaud.com/components/omnibar/) or a [modal](http://skyux.developer.blackbaud.com/components/modal/) header bar.
