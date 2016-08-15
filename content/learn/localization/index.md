---
layout: layout-sidebar
markdown: true
description: Learn about how SKY UX handles localization for a global user base.
order: 5
---

Localization is an important concept to the SKY UX framework.  Any text displayed in the framework is ended to support localization.

<!-- more -->

## Specifying a locale

In order to set the locale in SKY UX, an additional JavaScript file must be included in the page.  For example, following along with the [Start a project](../getting-started/start-a-project) page, our new `<script>` section would look like the following:

<pre><code class="language-markup">{{ include "includes/sky-bundle-js.html" escape=true }}
&lt;script src="{{ stache.config.cdn }}{{ stache.config.latest_sky_release }}/js/locales/sky-locale-en-GB.js"&gt;&lt;/script&gt;
&lt;script src="index.js"&gt;&lt;/script&gt;</code></pre>

## Supported locales

As of 2016-06-24, the following locales are fully supported in SKY UX:

- en-AU
- en-CA
- en-GB
- en-US

We are actively working to increase the available locales.

## Using Moment

Setting the current locale using the technique described above, also automatically includes and globally initializes the matching [bbMoment module](../../components/moment) locale.
