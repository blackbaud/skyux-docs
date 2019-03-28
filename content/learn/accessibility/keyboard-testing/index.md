---
description: SKY UX keyboard testing procedures for accessibility
name: Keyboard testing
layout: layout-sidebar
markdown: true
order: 42
showHeadings: false
showInNav: true
---

<bb-alert bb-alert-type="warning">This site describes <a href="https://angularjs.org/">the AngularJS (1.x) implementation</a> of the SKY UX framework. We still support this version, but it is in maintenance mode. We no longer develop features for this version, and we recommend the latest version of SKY UX instead. For more information, see <a href="https://developer.blackbaud.com/skyux">developer.blackbaud.com/skyux</a>.</bb-alert>

# Keyboard testing procedures for accessibility

### 1. Use the Tab key to move through a page or component

Ensure that navigation with the Tab key meets the following criteria:

1. The Tab key places focus on all focusable elements.
2. The Tab key does not place focus on elements that cannot receive focus.
3. A visual indication occurs when each element receives focus.
4. The order of focus follows the sequence and relationships in the page or component.
5. The page or component does not experience any substantial change when an element receives focus. For example, it does not experience substantial change when a modal opens or focus changes again.
6. The Tab key moves focus throughout the page without becoming trapped. It moves from top to bottom or bottom to top (Shift-Tab) and starts over when it reaches the bottom or top.

### 2. Use all interactive elements and controls

1. Ensure that the keyboard can access all interactive elements and controls.
  - Press Enter to activate links and buttons
  - Press arrow keys and the space bar to navigate to and select/deselect radio buttons, checkboxes, tabs, dropdown menus, navigation menus, autocomplete fields, and other elements and controls.

 For information about keyboard use for different types of controls, see [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/2016/WD-wai-aria-practices-1.1-20160317/).

2. Ensure that entering data in form inputs such as radio buttons, checkboxes, and text fields  does not substantially change the page or reload it.

3. Test error messages.
 - Ensure that the focus is placed on the error message or that an ARIA technique is used to announce error.
 - Ensure that the message includes a suggestion for how to fix the error.
 - Ensure that users can move focus directly from the error message to the error.

### 3. Use all modal dialogs

Ensure that navigation with the Tab key meets the following criteria:

1. The Tab key places focus on elements that open modal dialogs, and pressing Enter opens the dialog and places focus on the first element or the title.
2. The Tab key places focus on all focusable elements.
3. The Tab key does not place focus on elements that cannot receive focus.
4. Focus remains in the modal and does not return to the page.
5. When the Tab key places focus on an element that closes the modal, pressing Enter closes the modal.
6. When the modal closes, focus returns to the element that opened the modal or goes to a logical place based on actions within the modal. Focus does not return the top of the underlying page.
