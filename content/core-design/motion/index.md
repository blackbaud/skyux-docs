---
name: Motion
layout: layout-container
description: The motion guidelines explain the principles and physics of how to use motion in SKY UX animations.
markdown: true
---

<h1 class="bb-page-heading">Motion</h1>

<h2 class="bb-section-heading">Principles</h2>

Motion, by its nature, catches the eye. Our brains are well-practiced at interpreting motion and we can use the smallest details to learn about objects, relationships between them, and the forces at work when things change.

{{ stache.config.product_name_short }} uses motion to shed light on the nature of changes in the system. With subtle cues, we use animations to illustrate:

* Changes in context, such as entering or exiting a modal dialogue
* The consequences of actions the user takes
* Connections between different pieces of content
* Changes in the state of the system or content

{{ stache.config.product_name_short }} does NOT use animations for:

* Emphasizing some content over others
* Drawing attention to a primary action
* Distraction or diversion

<h2 class="bb-section-heading">Physics</h2>

Like other properties of visual design, motion takes advantage of the observer's expectations to simulate physical space in a digital picture. Just like the way shadows suggest depth and perspective, the details of motion imply properties about objects and the forces between them. {{ stache.config.product_name_short }} follows some basic rules to keep motions looking natural and realistic, and to best demonstrate context to our users.

* Use natural acceleration curves in animations
	* Avoid linear animations, especially for any position translations
	* Instead, ease-in when an object begins its motion while visible
	* Ease-out when an object is visible at the end of its motion
	* Ease-in-out when an object is visible throughout the whole motion
* Try to limit the number of animations being performed simultaneously, to cut down on distraction
* Be wary of giving multiple objects independent animations at the same time. When it's appropriate to animate multiple objects, ensure that their animation properties are as similar as possible:
	* Timing
	* Duration
	* Transition effect
	* Acceleration curve
	* Trajectory


<h2 class="bb-section-heading">Examples</h2>

{{ stache.config.product_name_short }} uses a set of metaphor-based motion effects. For the most part, these patterns should be included in the definitions of {{ stache.config.product_name_short }} components and not invoked directly.

<h3 class="bb-subsection-heading">Slide</h3>

This behavior is used for moving content (horizontally or vertically) without altering its other visual properties (scale, transparency, etc.) at the same time.

Primarily, {{ stache.config.product_name_short }} employs _slide_ to **show/hide additional content for sidebars or similar patterns that use "off-stage" content with an affordance for calling it into view**.

* Show/hide filters (sidebar)
* Show/hide held panel
* Move between adjacent steps in a wizard
* Move between tabs **(native mobile only)**
* Moving surrounding content during an _Expand/collapse_ effect (see below)

_Slide_ should follow these guidelines:

* Translate only in one dimension (X or Y), not both
* Use an **ease-in-out** acceleration curve for the translation
* Use a duration between 200 and 300 milliseconds
	* **300ms** for wizard steps, tabs, and other effects where one set of content is completely replaced by another
	* **200ms** for sidebars and other patterns where one set of content is partially covered by another

<h3 class="bb-subsection-heading">Expand/collapse</h3>

A close relative of _Slide_, this behavior is used to change the dimensions of containers that toggle between expanded and collapsed views of their content. Expand/collapse does not affect the z-order of the container, which means that surrounding content needs to be moved (using _Slide_) at the same time in order to make room (or reclaim vacated space).

Primarily, {{ stache.config.product_name_short }} employs _expand/collapse_ to **show/hide additional content that is hidden "on-stage" as part of a progressive disclosure pattern**.

* Tiles
* Accordion repeaters
* Search fields that collapse to an icon

_Expand/collapse_ should follow these guidelines:

* Increase and decrease the size of the container, but avoid applying any transition effects to the content within
	* The content should be revealed/hidden as the container size changes
* Use an **ease-in-out** acceleration curve for the scale change
* Use a duration of **300** milliseconds
	* If it necessary to _slide_ other content, use a 300ms duration for that movement as well (with the same acceleration curve)

<h3 class="bb-subsection-heading">Emerge/recede</h3>

This behavior is used to show content that is called or dismissed as a direct consequence of user action. It uses an eye-catching combination of scale, translation, and transparency transformations. This gives the affected content immediate prominence and also draws a clear relationship between the content and the initiating action the user just performed. Content that _emerges_ is elevated above its surroundings (and calling affordance) in the z-order with a shadow or even a mask over the rest of the page. When the interaction that began with the _emerge_ effect is completed (or abandoned), the content _recedes_ back into its related affordance with a reverse animation.

Primarily, {{ stache.config.product_name_short }} employs _emerge/recede_ for **initiating modal dialogues or other interactions that require the user to complete a task before moving on with anything else**.

* Modal dialogues
* Menus
* Dropdown/select controls
* Toasts

_Emerge/recede_ should follow these guidelines:

* Translate the center of the _emerging_ content from the center of the affordance that calls it, to the center of its desired location when visible
	* Toasts are an exception and always _emerge_ in their designated place -- no translation is needed
* Scale the _emerging_ content from 0 to its full size
* Increase the alpha of the _emerging_ content from 0 to 100
* Use an **ease-in-out** acceleration curve for all 3 transitions
* Use a duration of 200 to 300 milliseconds, synced for all 3 transitions
	* **200ms** for menus, pickers, and dropdown/select controls
	* **300ms** for toasts and modal dialogues
* If a modal dialogue also uses a translucent mask behind it, the mask does not need the full _emerge_ effect. Simply increase the mask's alpha from 0 to its final value using the same acceleration and duration as the other transitions.

<h3 class="bb-subsection-heading">Drill (native mobile only)</h3>

This behavior is used when navigating _into_ a child record from a parent container. It combines scale and translation to "drill into" the child record, clearly illustrating the change in the scope of the displayed content before and after the transition. The sum of the effects makes the selected child rise above the rest of the page in the z-order, then expand to fill the space of the parent (sometimes the full page). When navigating back to the parent page, the effect reverses.

Primarily, {{ stache.config.product_name_short }} employs _drill_ for **navigating to a page that contains content specific to a child member of the previous page**.

* Grid or table members
* Cards
* Repeater members
