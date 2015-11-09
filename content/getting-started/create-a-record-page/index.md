---
layout: layout-sidebar
order: 12
name: Create a record page
---

<h1>{{ name }}</h1>

<div class="bb-text-block">
<p>
  Now that you've learned how to get a <a href="../start-a-project">Sky app up and running</a>, let's build a page with some content.  There are two common page types in a Sky application, and one of those page types is a record page.  On a record page, information about a specific record is usually displayed in two distinct sections.
</p>

<h2>Summary section</h2>

<p>
  The first type of section is the summary section.  The summary section resides at the top of the page and provides a general overview of the record,
  such as the record name, a description of the record, perhaps a profile picture, etc.  To add a summary section to your page, use a <code>div</code> with the <code>.bb-page-header</code> CSS class.  Here's an example of a summary section that displays a name, description and profile photo:
</p>

<div class="page-example">
  <div class="bb-page-header">
    <div class="container-fluid">
      <div class="row">
          <div class="col-md-3 col-lg-2">
              <img src="/assets/img/hernandez.jpg" class="center-block img-circle" />
          </div>
          <div class="col-md-9 col-lg-10">
              <h1>Robert Hernandez</h1>
              <h4>CEO, Barkbaud, Inc.</h4>
              <p class="bb-text-block">
                Robert Hernandez is an important member of our organization.
              </p>
          </div>
      </div>
    </div>
  </div>
</div>

<pre><code class="language-markup">&lt;div class=&quot;bb-page-header&quot;&gt;
  &lt;div class=&quot;container-fluid&quot;&gt;
    &lt;div class=&quot;row&quot;&gt;
        &lt;div class=&quot;col-md-3 col-lg-2&quot;&gt;
            &lt;img src=&quot;/assets/img/hernandez.jpg&quot; class=&quot;center-block img-circle&quot; /&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-md-9 col-lg-10&quot;&gt;
            &lt;h1&gt;Robert Hernandez&lt;/h1&gt;
            &lt;h4&gt;CEO, Barkbaud&lt;/h4&gt;
            &lt;p class=&quot;bb-text-block&quot;&gt;
              Robert Hernandez is an important member of our organization.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

<h2>Tiles section</h2>

<p>
  The second type of section is the tile section.  This section usually consists of two columns of tiles (or one column on extra-small screen sizes like on mobile phones) that break out more specific information about the record into logical sections.  Each tile has a header that contains the tile's title and a body that contains the tile's content.  Tiles are collapsible and when used in conjunction with a <a href="../components/tiles">tile dashboard</a> can also be rearranged by the user.
</p>

<p class="alert alert-info">
  This example shows a page with a static tile layout.  To define a dynamic tile layout from a configuration object (such as from user preferences) you can use the <a href="../components/tiles" class="alert-link">tile dashboard directive.</a>
</p>

<div class="page-example">
  <div class="container-fluid">
    <div class="row bb-page-content-multicolumn">
      <div class="col-md-6 bb-page-content-tile-column">
        <bb-tile bb-tile-header="'Personal information'">
          <div bb-tile-section>
              <h4>Address</h4>
              410 17th Street
              <br>
              Denver, CO 80202-4402
          </div>
        </bb-tile>
      </div>
      <div class="col-md-6 bb-page-content-tile-column">
        <bb-tile bb-tile-header="'Latest gift'">
          <div bb-tile-section>
              <h4>$1.4k</h4>
              Given to Building Fund
              <br>
              10/21/2015
          </div>
        </bb-tile>
      </div>
    </div>
  </div>
</div>

<pre><code class="language-javascript">&lt;div class=&quot;container-fluid&quot;&gt;
    &lt;div class=&quot;row bb-page-content-multicolumn&quot;&gt;
      &lt;div class=&quot;col-md-6 bb-page-content-tile-column&quot;&gt;
        &lt;bb-tile bb-tile-header=&quot;&apos;Personal information&apos;&quot;&gt;
          &lt;div bb-tile-section&gt;
              &lt;h4&gt;Address&lt;/h4&gt;
              410 17th Street
              &lt;br&gt;
              Denver, CO 80202-4402
          &lt;/div&gt;
        &lt;/bb-tile&gt;
      &lt;/div&gt;
      &lt;div class=&quot;col-md-6 bb-page-content-tile-column&quot;&gt;
        &lt;bb-tile bb-tile-header=&quot;&apos;Latest gift&apos;&quot;&gt;
          &lt;div bb-tile-section&gt;
              &lt;h4&gt;$1.4k&lt;/h4&gt;
              Given to Building Fund
              &lt;br&gt;
              10/21/2015
          &lt;/div&gt;
        &lt;/bb-tile&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;</code></pre>

<p>
  Tiles can display data in all kinds of formats, whether it's a list of fields and their values, a repeater view of records, a chart, or anything else you can imagine.  We'll get into more detail about the common data elements inside tiles later, but for now let's move on to the next kind of page.
</p>
<hr>
<p>
  <strong>Next step:</strong> <a href="../create-a-tabbed-page">Create a tabbed page &raquo;</a>
</p>
</div>
