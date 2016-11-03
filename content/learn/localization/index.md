---
layout: layout-sidebar
markdown: true
description: Learn how SKY UX handles localization for a global user base.
order: 5
---

# Localization

Localization is an important concept to the {{ stache.config.product_name_short }} framework. Any text that is displayed in the framework should support localization.

<!-- more -->

## Specify a locale

To set the locale in {{ stache.config.product_name_short }}, an additional JavaScript file must be included in the page. For example, on the [Start a project](../getting-started/start-a-project) page, the `<script>` section would include an additional entry for localization.

<pre><code class="language-markup">{{ include "includes/sky-bundle-js.html" escape=true }}
&lt;script src="{{ stache.config.cdn }}{{ stache.config.latest_sky_release }}/js/locales/sky-locale-en-GB.js"&gt;&lt;/script&gt;
&lt;script src="index.js"&gt;&lt;/script&gt;</code></pre>

## Supported locales

As of November 2016, {{ stache.config.product_name_short }} fully supports the following locales:

- en-AU (English &mdash; Australia)
- en-CA (English &mdash; Canada)
- en-GB (English &mdash; Great Britain)
- en-US (English &mdash; United States)
- es-ES (Spanish &mdash; Spain)
- fr-CA (French &mdash; Canada)
- fr-FR (French &mdash; France)
- it-IT (Italian &mdash; Italy)
- nl_NL (Dutch &mdash; Netherlands)

We are actively working to increase the available locales.

## Use Moment.js

When you set the current locale with the technique above, you also automatically include and globally initialize the matching [bbMoment module](../../components/moment) locale.
