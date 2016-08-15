---
layout: layout-sidebar
markdown: true
description: Learn about how to consume SKY UX and best practices around our suggested build tools.
order: 2
---

# Consuming

## CDN

You have several options for consuming SKY UX.  The first and easiest is to point your site to our CDN.

{{ include "includes/sky-bundle-css.html" }}
{{ include "includes/sky-bundle-js.html" }}

## Package managers

Alternatively, you can install SKY UX via [Bower](http://bower.io/search/?q=blackbaud-skyux) or [NPM](https://www.npmjs.com/package/blackbaud-skyux) as such:

`bower install blackbaud-skyux`

`npm install blackbaud-skyux`

<bb-alert>Git is required when installing via Bower or NPM.</bb-alert>

## CDN with Fallback JS

There are [many advantages](http://www.sitepoint.com/7-reasons-to-use-a-cdn/) to hosting static resources on a CDN.  However, nothing's perfect, and CDNs can and do become unavailable leaving the need to employ a fallback strategy when loading any static assets from a CDN.  This article provides guidance on how to use the [Fallback JS](http://fallback.io/) library to load Sky UX via a CDN and from a local version if the CDN fails.

### Importing the Fallback JS library

The first step is to incorporate the Fallback JS library into your web application.  While you could load it via a CDN, that would sort of defeat the purpose of guaranteeing your assets load when the CDN fails.  Instead you should download the library and host it with your web application.

`bower install fallback --save-dev`

Once you've downloaded Fallback JS you can include it on your page.  For simplicity this example adds Fallback JS directly to your page from its installed location, but you'll likely want to combine it and minify it into the files you're already referencing on your page that don't depend on the Sky UX library.

`<script src="/bower_components/fallback/fallback.min.js"></script>`

### Importing the Sky UX library

Now that you've added the Fallback JS library it's time to add Sky UX to your page.  You'll need to download and host Sky UX on the same server where Fallback JS and your web application are hosted.  This is where Fallback JS will load Sky UX from in the case the CDN is unavailable.

`bower install blackbaud-skyux --save-dev`

Instead of adding `script` and `link` elements to load the Sky UX files, we'll load them via the Fallback JS API:

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

There's a decent amount of code here, so let's look at what each piece means.  First, `fallback.load()` is called with two parameters: this first is a dictionary of CSS and JS files that should be loaded on the page, and the second is some additional options.

#### Loading CSS

The two CSS resources that are loaded are the Sky UX CSS file (aliased as `sky_css`) and your web application's CSS file (aliased as `app_css`).  As you can see, an array of URLs is specified for the `sky_css` property.  This array contains the CDN URL as the first URL and the locally-hosted URL as the second.  Fallback JS will attempt to load these in the order they are specified; if the first fails, the second will be loaded.  You could specify as many fallback URLs as you'd like, but here we'll just use the CDN and local URLs.  

#### Loading JavaScript

In addition to the two CSS resources, we're also loading two JavaScript files: Sky UX's JS file and your web application's CSS file.  Unlike the CSS resources that are aliased using arbitrary names, each JavaScript alias must be an object that the JavaScript file adds to the global `window` object.  Since the Sky UX bundle also loads AngularJS, and since AngularJS adds an `angular` object to `window`, we'll use `angular` as the alias.  For the application's JS I've just added the line `window.MYAPP_READY = true;` to the bottom of my application's JS code so I can reference it here.

#### Specifying load order

The second parameter passed to `fallback.load()` consists of a `shim` property which you can use to define the load order of the JavaScript and CSS files.  Each property on the `shim` object is named after the corresponding resource's alias and is set to an array of other resources that must be loaded before that resource is loaded.  In our example we've stated that our own app's JS and CSS depend on Sky UX's JS and CSS, ensuring Sky UX loads before our app's resources load.

### Dealing with CDN failures

The option parameter's `callback` property can be used to specify a function that is called after all resources have been loaded.  This callback accepts `success` and `failed` parameters, the latter of which can be used to determine which requests failed.  Even though the fallback functionality should keep your app working properly when the CDN fails to load, you might want to know about failures so that you can include them in any instrumentation you are keeping for your application.

### Conclusion

Using the Sky UX CDN doesn't mean you are stuck with a single point of failure for your application.  Using this fallback strategy means that you can take advantage of the CDN in the vast majority of cases while still keeping your app run properly in case of a failure.

## CDN with Webpack
