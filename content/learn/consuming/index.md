---
layout: layout-sidebar
markdown: true
name: Consume SKY UX
description: Learn how to consume SKY UX and the best practices around our suggested build tools.
order: 2
---

# Consume {{ stache.config.product_name_short }}
{{ stache.config.product_name_short }} brings a consistent, cohesive experience to Blackbaud products, and you can use it to bring that same consistent experience to your own customizations and applications.

<p class="alert alert-info">{{ stache.config.product_name_short }} supports Microsoft Edge and Internet Explorer 11 on Windows; the latest version of Firefox and Chrome on both Windows and Mac; the latest verion of Safari on Mac; the latest version of Mobile Safari on IOS; and the latest version of Chrome on Android.</p>

## CDN

You have several options to consume {{ stache.config.product_name_short }}. The first and easiest is to point your site to our CDN, which you can read about in our [Getting started](../getting-started/start-a-project/#create-a-page) guide.

{{ include "includes/sky-bundle-css.html" }}
{{ include "includes/sky-bundle-js.html" }}

## Package managers

If you wish to host {{ stache.config.product_name_short }} yourself, you can install it with [Bower](http://bower.io/search/?q=blackbaud-skyux) or [NPM](https://www.npmjs.com/package/blackbaud-skyux) using the following commands:

`bower install blackbaud-skyux`

`npm install blackbaud-skyux`

<p class="alert alert-info">Before you install with Bower or NPM, you must install <a href="https://git-scm.com/">Git</a>.</p>

If you install with Bower or NPM, you must include the same files indicated in the [Getting started](../getting-started/start-a-project/#create-a-page) guide, but you point the URL to your own web server instead of the CDN. You may also use a hybrid approach where you load SKY UX with the CDN and fall back to a version hosted by your web server if the CDN is unavailable.

## CDN with Fallback JS

Hosting static resources on a CDN offers [many advantages](http://www.sitepoint.com/7-reasons-to-use-a-cdn/). However, CDNs can become unavailable, so you need a fallback strategy to avoid a single point of failure for your application.

One option is to use the [Fallback JS](http://fallback.io/) library to load {{ stache.config.product_name_short }} from a local version if the CDN fails. This fallback strategy allows you to take advantage of the CDN in the vast majority of cases but still keeps your app running properly if the CD fails.

<ol>
<li>
<p>Import the Fallback JS library and incorporate it into your web application.</p>
<p>You can load it via a CDN, but that defeats the purpose of the fallback strategy. Instead, download the library and host it with your web application.</p>
<pre><code>bower install fallback --save-dev</code></pre>
</li>
<li>
<p>Include Fallback JS on your page.</p>
<p>For simplicity, this example adds Fallback JS directly to your page from its installed location, but you likely want to combine it and minify it into the files you already reference on your page that don't depend on the {{ stache.config.product_name_short }} library.</p>
<pre><code>&#60;script src="/bower_components/fallback/fallback.min.js"&#62;&#60;/script&#62;</code></pre>
</li>
<li>
<p>Import the {{ stache.config.product_name_short }} library and add {{ stache.config.product_name_short }} to your page.</p>
<p>Download and host {{ stache.config.product_name_short }} on the same server that hosts Fallback JS and your web application. This is where Fallback JS loads {{ stache.config.product_name_short }} from if the CDN is unavailable.</p>
<pre><code>bower install blackbaud-skyux --save-dev</code></pre>
</li>
<li>
<p>Instead of adding `script` and `link` elements to load the {{ stache.config.product_name_short }} files, load them with the Fallback JS API:</p>
<pre><code class="language-javascript">(function () {
    'use strict';

    fallback.load({
        // CSS
        sky_css: [
            'https://sky.blackbaudcdn.net/skyux/1.4.3/css/sky-bundle.css',
            '/bower_components/blackbaud-skyux/dist/css/sky-bundle.css'
        ],
        page_css: '/css/app.css',

        // JS
        angular: [
            'https://sky.blackbaudcdn.net/skyux/1.4.3/js/sky-bundle.min.js',
            '/bower_components/blackbaud-skyux/dist/js/sky-bundle.min.js'
        ],
        MYAPP_READY: '/js/app.min.js'
    }, {
        shim: {
            'MYAPP_READY': ['angular'],
            'page_css': ['sky_css']
        },
        callback: function (success, failed) {
            // See what succeeded and what failed.
        }
    });
}());</code></pre>
<p>This is a decent amount of code, so let's look at what each piece of this code means. `fallback.load()` is called with two parameters. The first parameter is a dictionary of CSS and JS files to load on the page. The second parameter is some additional options.</p>
<h3>Load CSS</h3>
<p>The two CSS resources that the code loads are the {{ stache.config.product_name_short }} CSS file (aliased as `sky_css`) and your web application's CSS file (aliased as `app_css`). As you can see, the array of URLs that is specified for the `sky_css` property contains the CDN URL and the locally hosted URL. Fallback JS attempts to load these in the order they are specified. If the first fails, it loads the second. You can specify as many fallback URLs as you want, but this example just uses the CDN and the local URL.</p>
<h3>Load JavaScript</h3>
<p>We also load two JavaScript files: {{ stache.config.product_name_short }}'s JS file and your web application's CSS file. Unlike the CSS resources that we alias with arbitrary names, each JavaScript alias must be an object that the JavaScript file adds to the global `window` object. Since the {{ stache.config.product_name_short }} bundle also loads AngularJS and AngularJS adds an `angular` object to `window`, we use `angular` as the alias. For the application's JS, we added the line `window.MYAPP_READY = true;` to the bottom of the application's JS code so that we can reference it here.</p>
<h3>Specify load order</h3>
<p>The second parameter passed to `fallback.load()` consists of a `shim` property that you can use to define the load order of the JavaScript and CSS files. Each property on the `shim` object is named after the corresponding resource's alias and is set to an array of other resources that must load before that resource loads. In this example, we state that our own app's JS and CSS depend on {{ stache.config.product_name_short }}'s JS and CSS, ensuring that {{ stache.config.product_name_short }} loads before our app's resources load.</p>
<h3>CDN failures</h3>
<p>The option parameter's `callback` property can specify a function to call after all resources load. This callback accepts `success` and `failed` parameters, the latter of which can be used to determine which requests fail. Even though the fallback functionality should keep your app working properly when the CDN fails to load, you might want to know about failures so that you can include them in any instrumentation that you keep for your application.</p>
</li>
</ol>
