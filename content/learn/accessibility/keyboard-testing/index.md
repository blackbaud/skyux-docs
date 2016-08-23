---
description: SKY UX manual keyboard testing procedures.
name: Keyboard testing
layout: layout-sidebar
markdown: true
order: 42
showInNav: true
---

# Keyboard testing procedures

### 1. Use tab key to go through page or component

Check all of the following:

1. No focusable elements are missed
2. No elements that shouldn't receive focus are receiving focus
3. A visual indication displays when each focusable element receives focus
4. The order of focus follows the sequence and relationships in the content
5. There is no substantial change to the page when an element receives focus (e.g., opening modal, changing focus again)
6. The cursor does not become trapped moving through the entire page moving from top to bottom and vice versa (shift-tab). Cursor should loop from bottom to top starting page over when you reach the bottom.

### 2. Use all interactive elements and controls

1. Check that all interactive elements/controls can be used with only the keyboard.
  - Use enter to activate links and buttons
 - Use arrows and spacebar to move into and select/unselect radio buttons and checkboxes, tabs, dropdown navigation/menus, autocomplete or suggest lists, etc.
 (For questions on keyboard use for different types of controls see [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/2016/WD-wai-aria-practices-1.1-20160317/)
2. On input there is no substantial change to the page or reload (i.e., for form inputs - radio buttons, checkboxes, text fields, select fields)
3. Test error messages
 - Focus is put to error message (or aria technique is used to announce error)
 - Suggestion(s) is included for fixing error
 - There is a way to directly move focus to error from error message

### 3. Use modals/dialogs

1. Tab to elements that open modal. Hit enter key to open modal/dialog. Focus should go to first element or title of modal.
2. Use tab to go through all elements in modal that should be focusable in the user interface and ensure none are missed or there are any elements that shouldn't receive focus
3. Ensure that focus stays within modal and doesn't move back to page
4. Close modal/dialog with enter key
5. Focus should return to element where you left off or logical place in page depending on action in modal. It shouldn't return to start of underlying page.
