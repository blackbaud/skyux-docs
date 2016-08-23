---
description: SKY UX code review steps for accessibility
layout: layout-sidebar
markdown: true
name: Code review
order: 41
showInNav: true
---

# Code review checklist for accessibility

### Equivalent text

1. Review alt attributes and ensure that the values make sense for the context
2. Review button text values and ensure the values make sense for purpose/function
3. Identify any images that are decorative, ensure they have blank alt="" attribute

### Order

4. Compare the visual order of elements to the DOM order of elements, they should match.  

### Link Purpose

5. If a link label isn't descriptive itself, its context would communicate its purpose (e.g., enclosing parent element give context)
If multiple links with same label on page, a link element has a title, aria-label, or aria-labelledby attribute to communicate purpose)

### Custom controls

6. Look for custom interactive controls which are HTML elements, but used in a manner or for a role not part of the HTML standard. Check these have necessary ARIA roles, states, and properties for how the elements are used/scripted to interact.  
