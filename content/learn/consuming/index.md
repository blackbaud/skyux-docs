---
layout: layout-sidebar
markdown: true
name: Consume SKY UX
description: Learn how to consume SKY UX and about best practices around our suggested build tools.
order: 2
---

# Consume {{ stache.config.product_name_short }}

## CDN

You have several options to consume {{ stache.config.product_name_short }}. The first and easiest is to point your site to our CDN, which you can read about in our [Getting started](../getting-started/start-a-project/#create-a-page) guide.

{{ include "includes/sky-bundle-css.html" }}
{{ include "includes/sky-bundle-js.html" }}

## Package managers

Alternatively, you can install {{ stache.config.product_name_short }} with [Bower](http://bower.io/search/?q=blackbaud-skyux) or [NPM](https://www.npmjs.com/package/blackbaud-skyux) as such:

`bower install blackbaud-skyux`

`npm install blackbaud-skyux`

If you install with Bower or NPM, you need to include the same files as indicated in the [Getting started](../getting-started/start-a-project/#create-a-page) guide but with the URL pointing to your own web server rather than the CDN. You may also use a hybrid approach where you load SKY UX via the CDN and fall back to a version hosted by your web server if the CDN is unavailable.

<bb-alert>Before you install with Bower or NPM, you must install <a href="https://git-scm.com/">Git</a>.</bb-alert>

## CDN with Fallback JS

Hosting static resources on a CDN offers [many advantages](http://www.sitepoint.com/7-reasons-to-use-a-cdn/). However, CDNs can become unavailable, so you need a fallback strategy to load static assets from a CDN. You can use the [Fallback JS](http://fallback.io/) library to load {{ stache.config.product_name_short }} from a local version if the CDN fails.

### Import the Fallback JS library

The first step is to incorporate the Fallback JS library into your web application. You could load it via a CDN, but that would defeat the purpose of guaranteeing your assets load when the CDN fails. Instead, you should download the library and host it with your web application.

`bower install fallback --save-dev`

After you download Fallback JS, you can include it on your page. For simplicity, this example adds Fallback JS directly to your page from its installed location, but you likely want to combine it and minify it into the files you already reference on your page that don't depend on the {{ stache.config.product_name_short }} library.

`<script src="/bower_components/fallback/fallback.min.js"></script>`

### Import the {{ stache.config.product_name_short }} library

After you add the Fallback JS library, it's time to add {{ stache.config.product_name_short }} to your page. You need to download and host {{ stache.config.product_name_short }} on the same server that hosts Fallback JS and your web application. This is where Fallback JS loads {{ stache.config.product_name_short }} from if the CDN is unavailable.

`bower install blackbaud-skyux --save-dev`

Instead of adding `script` and `link` elements to load the {{ stache.config.product_name_short }} files, load them with the Fallback JS API:

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

Let's look at what each piece of this code means. First, `fallback.load()` is called with two parameters. The first parameter is a dictionary of CSS and JS files to load on the page. The second parameter is some additional options.

#### Load CSS

The two CSS resources that the code loads are the {{ stache.config.product_name_short }} CSS file (aliased as `sky_css`) and your web application's CSS file (aliased as `app_css`). As you can see, an array of URLs is specified for the `sky_css` property. This array contains the CDN URL first and then the locally hosted URL. Fallback JS attempts to load these in the order they are specified; if the first fails, it loads the second. You can specify as many fallback URLs as you want, but here we just use the CDN and the local URL.  

#### Load JavaScript

In addition to the CSS resources, we also load two JavaScript files: {{ stache.config.product_name_short }}'s JS file and your web application's CSS file. Unlike the CSS resources that are aliased with arbitrary names, each JavaScript alias must be an object that the JavaScript file adds to the global `window` object. Since the {{ stache.config.product_name_short }} bundle also loads AngularJS and AngularJS adds an `angular` object to `window`, we use `angular` as the alias. For the application's JS, we added the line `window.MYAPP_READY = true;` to the bottom of the application's JS code so we can reference it here.

#### Specify load order

The second parameter passed to `fallback.load()` consists of a `shim` property that you can use to define the load order of the JavaScript and CSS files. Each property on the `shim` object is named after the corresponding resource's alias and is set to an array of other resources that must be loaded before that resource is loaded. In our example, we state that our own app's JS and CSS depend on {{ stache.config.product_name_short }}'s JS and CSS, ensuring {{ stache.config.product_name_short }} loads before our app's resources load.

### CDN failures

The option parameter's `callback` property can specify a function that is called after all resources are loaded. This callback accepts `success` and `failed` parameters, the latter of which can be used to determine which requests failed. Even though the fallback functionality should keep your app working properly when the CDN fails to load, you might want to know about failures so that you can include them in any instrumentation you keep for your application.

### Conclusion

Using the {{ stache.config.product_name_short }} CDN doesn't mean you are stuck with a single point of failure for your application. This fallback strategy allows you to take advantage of the CDN in the vast majority of cases while still keeping your app running properly in case of a failure.

## CDN with Webpack
