---
name: Typography
description: Font classes
---

<h1 class="page-heading">Typography</h1>

<p>In order to ensure consistent usage and maintain visual hierarchy of type SkyUX supports a set of semantically-defined classes to be applied to text. Styling should generally not be applied directly to text elements; instead use these CSS classes based on what you are trying to communicate.</p>

<p>SkyUX defines 7 text classes for general use in addition to base body copy.</p>

<div class="alert alert-warning">Note that styling values are for reference only, and should not be applied directly; styling should be applied through the use of classes.</div>

<h2 class="subpage-heading">page-heading</h2>
<div class="page-heading">This is a page heading</div>
<code>&lt;div class="page-heading"&gt;This is a page heading&lt;/div&gt;</code>
<div class="section-heading">Usage</div>
<p>This is used for text that identifies the page, such as a page title or record name. There should only be one element with this class on a page.</p>
<div class="section-heading">Styling</div>
<p>Oswald Light 32px #292a2b</p>

<h2 class="subpage-heading">subpage-heading</h2>
<div class="subpage-heading">This is a subpage heading</div>
<code>&lt;div class="subpage-heading"&gt;This is a subpage heading&lt;/div&gt;</code>
<div class="section-heading">Usage</div>
<p>This is used for text that identifies subdivisions of a page, such as tile titles.</p>
<div class="section-heading">Styling</div>
<p>Oswald Light 24px #292a2b</p>

<h2 class="subpage-heading">section-heading</h2>
<div class="section-heading">This is a section heading</div>
<code>&lt;div class="section-heading"&gt;This is a section heading&lt;/div&gt;</code>
<div class="section-heading">Usage</div>
<p>This is used for text that identifies sections with a larger container. For example, a tile containing contact information would have sections for addresses, email addresses and phone numbers.</p>
<div class="section-heading">Styling</div>
<p>Open Sans Regular 17px #707374</p>

<h2 class="subpage-heading">headline</h2>
<div class="headline">This is a headline</div>
<code>&lt;div class="headline"&gt;This is a headline&lt;/div&gt;</code>
<div class="section-heading">Usage</div>
<p>This is used to call out key always-relevant pieces of information on page, such as a constituent’s total giving or the number of records in a list. It should be used sparingly or else the attention-drawing aspect will be diluted.</p>
<div class="section-heading">Styling</div>
<p>Oswald Regular 20px #292a2b</p>

<h2 class="subpage-heading">Base body copy</h2>
<p>The base font of SkyUX is documented here as well, even though it does not need a separate class.</p>
<div class="section-heading">Usage</div>
<p>The default font, used when the data being presented does not semantically fall under one of the defined types.</p>
<div class="section-heading">Styling</div>
<p>Open Sans Regular 13px #292a2b</p>

<h2 class="subpage-heading">body-emphasized</h2>
<div class="body-emphasized">This is emphasized body copy</div>
<code>&lt;div class="body-emphasized"&gt;This is emphasized body copy&lt;/div&gt;</code>
<div class="section-heading">Usage</div>
<p>This is used to call out pieces of information that are important but not always what the user is looking for, such as a constituent’s name in a list of contact cards. It should be used sparingly or else the attention-drawing aspect will be diluted.</p>
<div class="section-heading">Styling</div>
<p>Open Sans Semibold 14px #292a2b</p>

<h2 class="subpage-heading">body-deemphasized</h2>
<div class="body-deemphasized">This is deemphasized body copy</div>
<code>&lt;div class="body-deemphasized"&gt;This is deemphasized body copy&lt;/div&gt;</code>
<div class="section-heading">Usage</div>
<p>This is used for information that is sometimes relevant but that you want the user to be able to visually skip over, such as placeholder text.</p>
<div class="section-heading">Styling</div>
<p>Open Sans Italic 13px #707374</p>

<h2 class="subpage-heading">field-label</h2>
<div class="field-label">This is a field label</div>
<code>&lt;div class="field-label"&gt;This is a field label&lt;/div&gt;</code>
<div class="section-heading">Usage</div>
<p>This is used to label fields in both views and on forms. It is a muted color since the label is important in identifying the related field, but is less important than the actual content. </p>
<div class="section-heading">Styling</div>
<p>Open Sans Regular 13px #707374</p>