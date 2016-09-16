---
name: Forms
description: Describes different approaches to using forms depending on the context.
markdown: true
layout: layout-container
---

# Forms

There are various form patterns available in {{ stache.config.product_name_short }} to accommodate scenarios of varying complexity and workflow requirements.  

## Inline
Consider using an inline panel if your scenario meets one or more of the following criteria:
* The form is simple in terms of a small # of fields and low complexity of input controls 
* The surrounding content will not distract the user from the task  
* Adding/editing records in a subsection of a larger modal dialog 
* There is a high likelihood the user would need to add multiple records in succession
* It’s ok if the user abandons the task while the form is open (i.e. the task is functionally non-modal) 

## Modal dialog
Use a [modal](../../components/modal) dialog when:
* You want the user to have to finish the task before doing anything else (i.e. the task is functionally modal)
* The form would lead to a large amount of page morphing or a user needing to scroll to ccomplete the form if shown inline 
* Adding records from a paginated or infinite scroll list of items 

## Full-page modal
Use a full-page [modal](../../components/modal) when:
* You want the user to have to finish the task before doing anything else (i.e. the task is functionally modal)
* The task is usually done in a large viewport and the UI can be optimized to use the space 
* The context of the task is self-contained 
* Need to display ancillary information or previews (e.g. running totals or an email being constructed) 
* Need to perform a complex task for a list of objects (e.g. filling out report cards for a class) 
* The task has subtasks that may need to be completed in context
* The form needs a unique URL  

## Wizard
Use a [wizard](../../components/wizard) if your scenario meets the following criteria:
* You want to break up a larger task into discrete steps 
* The order of the steps in important 
* Choices you make in earlier steps can have effects in later steps
* You expect that the user will complete (or at least review) the fields in every step 
* There’s a chance the user might want to leave the workflow but save their progress to return at a later time 