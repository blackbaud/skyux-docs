---
name: Forms
description: Form patterns determine the type of form to use to meet different workflow requirements.
markdown: true
layout: layout-container
---

# Forms

{{ stache.config.product_name_short }} provides various form patterns to accommodate different scenarios and workflow requirements.  

## Inline panel
An inline panel is appropriate for simple forms that meets the following criteria:
* The form has few fields, and its input controls are not complex.
* The content that surrounds the form will not distract users.
* The task is functionally non-modal, and users can abandon it while the form is open.

## Modal dialog
[A modal dialog](../../components/modal) is appropriate for forms that meet any of the following criteria:
* The task is functionally modal, and users must finish it before doing anything else.
* Displaying the form inline would lead to a large amount of content shifting or require users to scroll to complete the form.
* The form adds records from [a paginated list](../../components/pagination) or [an infinite scroll list](../../components/infinitescroll).

## Full-page modal
[A full-page modal](../../components/modal) is appropriate for forms that meet the following criteria:
* The task is functionally modal, and users must finish it before doing anything else.
* Users usually perform the task in a large viewport, and a full-page modal can optimize the use of space.
* The context of the task is self-contained.
* The form displays ancillary information or previews such as running totals or an email being constructed.
* The form supports a complex task for a list of objects such as filling out report cards for a class.
* The task includes subtasks that need to be completed in context.

## Wizard
[A wizard](../../components/wizard) is appropriate for forms that meet the following criteria:
* The task can be divided into discrete steps.
* The order of the steps is important.
* User actions in earlier steps affect later steps.
* Users must complete or review the fields in every step.
* Users might want to save their progress so that they can leave the form and return later.
