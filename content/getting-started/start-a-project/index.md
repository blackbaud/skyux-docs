---
layout: layout-sidebar
order: 11
name: "Start a project"
showNavDropdown: true
---

<h1>{{ name }}</h1>

<div class="bb-text-block">
<p>
  This walkthrough guides you through the process to create a basic application with {{ stache.config.product_name_short }}. We’ll start with a blank HTML page and proceed to a fully functioning {{ stache.config.product_name_short }} application.
</p>

<p class="alert alert-info">
  <strong>Prerequisite:</strong> Keep in mind that the heart of {{ stache.config.product_name_short }} is <a href="https://angularjs.org/" class="alert-link">AngularJS</a> and <a href="http://getbootstrap.com/" class="alert-link">Bootstrap</a>, so you need to be familiar with these technologies before you get started.
</p>

<h2>Create a page</h2>

<p>
  Let's start with a basic HTML page that includes {{ stache.config.product_name_short }}.  First, create an empty folder and inside that folder add an HTML file called <code>index.html</code>.  Starting with the following boilerplate HTML will ensure your page renders properly in all modern browsers:
</p>

<pre><code class="language-markup">&lt;!DOCTYPE html&gt;
&lt;html charset="utf-8"&gt;
  &lt;head&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
    &lt;title&gt;My First {{ stache.config.product_name_short }} App&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;

  &lt;/body&gt;
&lt;/html&gt;</code></pre>
</li>

<p>
  Next we'll add {{ stache.config.product_name_short }} to the page by pointing to {{ stache.config.product_name_short }} via the Blackbaud Sky CDN.
</p>

<p class="alert alert-info">If you wish to host {{ stache.config.product_name_short }} yourself, you may install it via Bower instead of pointing to the CDN.  See the <a href="{{ stache.config.github }}" class="alert-link">{{ stache.config.product_name_short }} GitHub page</a> for instructions on installing via Bower.</p>

<pre><code class="language-markup">&lt;!DOCTYPE html&gt;
&lt;html charset="utf-8"&gt;
  &lt;head&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
    &lt;title&gt;My First {{ stache.config.product_name_short }} App&lt;/title&gt;
    &lt;link rel="stylesheet" href="{{ stache.config.cdn }}{{ stache.config.latest_sky_release }}/css/libs.css"&gt;
    &lt;link rel="stylesheet" href="{{ stache.config.cdn }}{{ stache.config.latest_sky_release }}/css/sky.css"&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;script src="{{ stache.config.cdn }}{{ stache.config.latest_sky_release }}/js/libs.min.js"&gt;&lt;/script&gt;
    &lt;script src="{{ stache.config.cdn }}{{ stache.config.latest_sky_release }}/js/sky.min.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<p>You should now be able to spin up a web server in your project's directory (the NPM package <a href="https://www.npmjs.com/package/http-server"><code>http-server</code></a> is very handy for this) and browse to it in a web browser.</p>

<h2>Add content</h2>

<h3>Simple HTML Elements</h3>

<p>Let's brighten things up a bit by adding a button to the page. {{ stache.config.product_name_short }} is based on Bootstrap, so we can use all the <a href="http://getbootstrap.com/css/">standard Bootstrap CSS classes</a>.  Add a <code>div</code> tag within your page's <code>&#60;body&#62;</code> element and use the <code>class</code> attribute to wrap the button in the Bootstrap CSS class <code>container-fluid</code> and the {{ stache.config.product_name_short }} CSS class <code>bb-page-content</code>.  These classes separate the content from the navbar and the edges of the browser window.</p>

<p class="alert alert-info">For brevity's sake the remaining code samples will omit the boilerplate HTML and just show the code that goes in your page's <code>&#60;body&#62;</code> element.</p>

<pre><code class="language-markup">&lt;div class="container-fluid bb-page-content"&gt;
  &lt;button type="button" class="btn btn-primary"&gt;Hello World&lt;/button&gt;
&lt;/div&gt;</code></pre>

 <p>This renders a button that looks like this:</p>

<section class="page-example">
  <div class="container-fluid bb-page-content">
    <button type="button" class="btn btn-primary">Hello World</button>
  </div>
  <p></p>
</section>

<p>While the button respects the Bootstrap <code>btn-primary</code> class, it looks a little different than the default Bootstrap button.  {{ stache.config.product_name_short }} overrides Bootstrap styles with its own styles to create a unique user interface that still takes advantage of the responsive nature of its Bootstrap core.</p>

<h3>AngularJS Directives</h3>

<p>Of course, {{ stache.config.product_name_short }} is more than just CSS. It also features an <a href="../documentation">extensive library</a> of <a href="https://angularjs.org/">AngularJS</a> components. To use these, your page must define an Angular application.</p>

<p>In the page's <code>html</code> element, add an <code>ng-app</code> attribute, but don't refresh your browser just yet.</cp>

<pre><code class="language-markup">&lt;html charset="utf-8" ng-app="skytutorial"&gt;</code></pre>

<p>To define <code>skytutorial</code> as an Angular module in JavaScript so that Angular knows what to wire up to your HTML page, create an <code>index.js</code> file next to <code>index.html</code> at the root of your project. Add a reference to your <code>index.js</code> to the bottom of the <code>&#60;body&#62;</code> element.</p>

<pre><code class="language-markup">&lt;script src="{{ stache.config.cdn }}{{ stache.config.latest_sky_release }}/js/libs.min.js"&gt;&lt;/script&gt;
&lt;script src="{{ stache.config.cdn }}{{ stache.config.latest_sky_release }}/js/sky.min.js"&gt;&lt;/script&gt;
&lt;script src="index.js"&gt;&lt;/script&gt;</code></pre>

<p>In the <code>index.js</code> file, add the <code>sky</code> module as a dependency on your <code>skytutorial</code> module by putting it in brackets as the second argument to <code>angular.module()</code>. This ensures that all {{ stache.config.product_name_short }} functionality is available to your Angular application.</p>

<pre><code class="language-javascript">(function () {
  'use strict';

  angular.module('skytutorial', ['sky']);
}());</code></pre>

<p>Now that our page is a proper Angular application, we can add Angular components. Let's start with the navbar. Don't worry too much about what all this HTML does for now. I've just copied it from the <a href="../documentation/navbar/">Navbar documentation</a> and pasted it as-is here. Copy the following HTML and paste it immediately after your opening <code>&#60;body&#62;</code> tag.</p>

<pre><code class="language-markup">&lt;bb-navbar&gt;
  &lt;div class="container-fluid"&gt;
    &lt;ul class="nav navbar-nav navbar-left"&gt;
      &lt;li class="bb-navbar-active"&gt;&lt;a href=""&gt;Selected Item&lt;/a&gt;&lt;/li&gt;
      &lt;li class="dropdown"&gt;
        &lt;a href="" class="dropdown-toggle" role="button"&gt;Child Items &lt;span class="caret"&gt;&lt;/span&gt;&lt;/a&gt;
        &lt;ul class="dropdown-menu" role="menu"&gt;
          &lt;li&gt;
            &lt;a href=""&gt;Child Item 1&lt;/a&gt;
          &lt;/li&gt;
          &lt;li&gt;
            &lt;a href=""&gt;Child Item 2&lt;/a&gt;
          &lt;/li&gt;
          &lt;li&gt;
            &lt;a href=""&gt;Child Item 3&lt;/a&gt;
          &lt;/li&gt;
        &lt;/ul&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
    &lt;ul class="nav navbar-nav navbar-right"&gt;
      &lt;li&gt;&lt;a href=""&gt;Right Item&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/bb-navbar&gt;</code></pre>

<p>By now your HTML file should look like this:</p>

<pre><code class="language-markup">&lt;!DOCTYPE html&gt;
&lt;html charset="utf-8" ng-app="skytutorial"&gt;

&lt;head&gt;
  &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
  &lt;title&gt;My First {{ stache.config.product_name_short }} App&lt;/title&gt;
  &lt;link rel="stylesheet" href="{{ stache.config.cdn }}{{ stache.config.latest_sky_release }}/css/libs.css"&gt;
  &lt;link rel="stylesheet" href="{{ stache.config.cdn }}{{ stache.config.latest_sky_release }}/css/sky.css"&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;bb-navbar&gt;
    &lt;div class="container-fluid"&gt;
      &lt;ul class="nav navbar-nav navbar-left"&gt;
        &lt;li class="bb-navbar-active"&gt;&lt;a href=""&gt;Selected Item&lt;/a&gt;&lt;/li&gt;
        &lt;li class="dropdown"&gt;
          &lt;a href="" class="dropdown-toggle" role="button"&gt;Child Items &lt;span class="caret"&gt;&lt;/span&gt;&lt;/a&gt;
          &lt;ul class="dropdown-menu" role="menu"&gt;
            &lt;li&gt;
              &lt;a href=""&gt;Child Item 1&lt;/a&gt;
            &lt;/li&gt;
            &lt;li&gt;
              &lt;a href=""&gt;Child Item 2&lt;/a&gt;
            &lt;/li&gt;
            &lt;li&gt;
              &lt;a href=""&gt;Child Item 3&lt;/a&gt;
            &lt;/li&gt;
          &lt;/ul&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
      &lt;ul class="nav navbar-nav navbar-right"&gt;
        &lt;li&gt;&lt;a href=""&gt;Right Item&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/bb-navbar&gt;
  &lt;div class="container-fluid bb-page-content"&gt;
    &lt;button type="button" class="btn btn-primary"&gt;Hello World&lt;/button&gt;
  &lt;/div&gt;
  &lt;script src="{{ stache.config.cdn }}{{ stache.config.latest_sky_release }}/js/libs.min.js"&gt;&lt;/script&gt;
  &lt;script src="{{ stache.config.cdn }}{{ stache.config.latest_sky_release }}/js/sky.min.js"&gt;&lt;/script&gt;
  &lt;script src="index.js"&gt;&lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;</code></pre>

<p>And when you view it in a browser, it should look like this:</p>

<section class="page-example">
  <bb-navbar>
    <div class="container-fluid">
      <ul class="nav navbar-nav navbar-left">
        <li class="bb-navbar-active"><a href="">Selected Item</a></li>
        <li class="dropdown">
          <a href="" class="dropdown-toggle" role="button">Child Items <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li>
              <a href="">Child Item 1</a>
            </li>
            <li>
              <a href="">Child Item 2</a>
            </li>
            <li>
              <a href="">Child Item 3</a>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="">Right Item</a></li>
      </ul>
    </div>
  </bb-navbar>
  <div class="container-fluid bb-page-content">
    <button type="button" class="btn btn-primary">Hello World</button>
  </div>
  <p></p>
</div>
<p></p>

<br />

<p>And there you have it! A page that uses both the CSS and Angular components of {{ stache.config.product_name_short }}.</p>
<hr>
<p>
  <strong>Next step:</strong> <a href="../create-a-record-page/">Create a record page &raquo;</a>
</p>
</div>
