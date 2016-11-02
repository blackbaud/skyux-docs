---
name: User assistance
description: User assistance patterns facilitate access to help documentation and other explanatory content.
markdown: true
layout: layout-container
---

# User assistance


## Persistent inline assistance

Sometimes a small amount of persistent inline explanatory text can help users understand the tasks they perform. For example, inline help can be very useful for tasks that are complex and infrequently performed. It can also be helpful for tasks where user actions have far-reaching consequences that may not be obvious.

However, scenarios that require persistent help text are fairly rare. For example, persistent inline help text is not appropriate for frequently performed tasks because the value of the text diminishes over time even though the text continues to take up screen space.

You should limit persistent inline help to one or two sentences because blocks of persistent text can clutter pages and because users almost always ignore large blocks of text. And to minimize visual clutter, use [text styling](../../design/typography) to de-emphasize persistent inline text.

## Invoked inline assistance

For scenarios where inline help text should not be persistent, you can provide the ability for users to invoke it. For example, in scenarios where explanatory text is useful when users first perform tasks but the ramifications of mistakes are small, you can provide a [help button](../../components/helpbutton/) to invoke explanatory help text. Depending on the complexity of the help text, you can display it in a [popover](../../components/popover/) or the [help panel](../../components/help/). Invoked inline help text allows users to access to the help text as necessary but avoids most of the visual clutter from persistent inline help.

## Page- and modal-level help

When users perform complex tasks, they may require comprehensive documentation for the entire task instead of inline help for individual components of the task. Since this documentation applies to more than a single field, users should invoke it at the page or modal level, depending on the context. In Blackbaud products, users can invoke the [help service](../../components/help/) from the [omnibar](../../components/omnibar/) or a [modal](../../components/modal/) header bar.
