---
icon: bars
summary: The omnibar provides a common UI element for Blackbaud products to enable seamless navigation for users.
markdown: false
files:
  js:
    - /assets/js/omnibar-tabs.js
---

{{# markdown }}
  # Omnibar
{{/markdown }}

<div class="alert alert-warning">
  <div class="media">
    <div class="media-left">
      <span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-flag fa-stack-1x fa-inverse"></i></span>
    </div>
    <div class="media-body">
      <h4 class="media-heading" id="advanced-users-only">For Blackbaud Internal Use Only</h4>
      The omnibar component and omnibar service are not currently available for third-party custom applications.
    </div>
  </div>
</div>

<div ng-controller="OmnibarDocsController as omnibarDocsCtrl">
  <uib-tabset>
  <uib-tab heading="SKY UX" active="omnibarDocsCtrl.tab2Active" bb-tab-sref="TabAngularJS">

{{# markdown }}
The omnibar component provides a wrapper for the omnibar service and omnibar widget.  The omnibar features asynchronously loaded UI elements and integrates with user accounts to allow users to sign in and out, manage their accounts, and access purchased products.

<p class="alert alert-info"><strong><em>Note:</em></strong> You can implement the omnibar with the `bb-omnibar` directive or as a native JavaScript component outside of SKY UX. This SKY UX tab describes the `bb-omnibar` directive, and the Standalone tab describes additional steps for a native JavaScript component.</p>

### Omnibar Placement

The omnibar automatically docks at the top of the page, so it is important to leave enough space to prevent the omnibar from overlaying important page content. To help create space, the omnibar automatically loads the `bb-omnibar-height-padding` and `bb-omnibar-height-margin` CSS classes. These classes set `padding-top` and `margin-top`, respectively, to the height that the omnibar requires and ensures that if the omnibar height changes, then the page adjusts automatically.

You should add **one** of these classes to the page's `body` element or to the wrapping DOM element that the page uses. Do not include both classes because that creates twice as much space as necessary. However, both classes are provided to account for any scenarios where it is important to specify whether to provide the space through padding or margin.

### CSS z-index

To avoid `z-index` issues, place the `bb-omnibar` directive at the bottom of the page to load it after other elements. This allows the omnibar and its flyouts to sit on top of the existing page. If the page includes dynamic content or you cannot load the omnibar last, then `z-index` issues may occur. In that scenario, you should create an omnibar `div` element and style it to ensure an appropriate `z-index` to resolve this.


### Mobile Meta Tag

The omnibar automatically renders different for small mobile devices in order to create a pleasant experience when there is not room for multiple fly outs from the bar. The omnibar was created with the following meta-tags included to optimize how the page works on a mobile device. For ideal consumption of the omnibar, the page should include the following meta tag in its `<head>`.

To create a pleasant the user experience for screen sizes that do not have space for multiple flyouts, the omnibar automatically renders differently at different media breakpoints. To optimize how the omnibar works at smaller screen sizes, include the following `meta` tag in the page's `head` element.


```markup
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
```

### bbOmnibarConfig Settings

- `afterLoad` &mdash; A function which will be called after the omnibar has successfully loaded.  Useful if binding events to the search box.
- `appLookupUrl` &mdash; Application Lookup Service URL.  This service provides applicable database / product links for the current user.  Default is the production instance.
- `contentKey` &mdash; Indicates that the omnibar should supply this content key when redirecting the user to the Authentication Service.
- `enableHelp` &mdash; Controls whether the help button is visible in the omnibar.  This setting should be used in conjunction with the [bbHelp component](../help/).
- `enableSearch` &mdash; Controls whether the search box is visible in the omnibar.  You must still handle binding to the UI events for the search box.
- `productId` &mdash; ID used for specifying a registered product with the omnibar Service.  This is currently reserved as an internal implementation.  Consider using the `serviceName` property instead.
- `searchPlaceholder` &mdash; Placeholder text displayed in the search box.
- `serviceName` &mdash; An alternative to providing the `productId` property which will show as text in the header in lieu of a registered product logo.
- `signInUrl` &mdash; Indicates where the user should be redirected to after signing in. The target domain must be a valid relying party for this to be honored, which is currently reserved to the following:
  -  blackbaud.com
  -  blackbaud-dev.com
  -  blackbaud-test.com
- `signOutUrl` &mdash; Indicates where the user should be redirected to after signing out. The target domain must be a valid relying party for this to be honored, which is currently reserved to the following:
  -  blackbaud.com
  -  blackbaud-dev.com
  -  blackbaud-test.com
- `tenantId` &mdash; When a user has access to multiple databases for a product, the omnibar may show the current database name to provide context. If this database is well-known from the Application Lookup Service, then providing the omnibar with the current Tenant Id will let it match up the current context with that well-known link and know what database name to show. Alternatively, if the tenant ID cannot be matched or is not provided, the omnibar can be provided with a database name directly and it may display that.
- `url` &mdash; URL of the omnibar Service JavaScript widget.
- `userLoaded` &mdash; A function which will be called after the current user profile information is loaded.  The function is passed a user object which contains the following properties:
  - `id` &mdash; Unique Authentication Service User ID.  Null if user is not logged in.
  - `emailAddress` &mdash; Email address of the user.  Null if user is not logged in.
  - `firstName` &mdash; First name of the user.  May be null if unknown.
  - `lastName` &mdash; Last name of the user.  May be null if unknown.

## Markup

```markup
<bb-omnibar>
    <bb-omnibar-menu>
      <ul class="bb-omnibar-productmenu">
        <li>
          <a href="#">Menu Item 1</a>
        </li>
        <li>
          <a href="#">Menu Item 2</a>
        </li>
      </ul>
    </bb-omnibar-menu>
  </bb-omnibar>
```

## JavaScript

```javascript
angular.module(`skyux-demo`, [])
  .constant(`bbOmnibarConfig`, {
      enableHelp: false,
      enableSearch: true,
      searchPlaceholder: 'Search',
      serviceName: 'Sky',
      afterLoad: function () {
          // Omnibar loaded
      },
      userLoaded: function (user) {
          // user.id
          // user.firstName
          // user.lastName
          // user.emailAddress
      }
  });
```
{{/ markdown }}

</uib-tab>
  <uib-tab heading="Standalone" active="omnibarDocsCtrl.tab1Active" bb-tab-sref="TabNative">

{{# markdown }}

In addition to using the `bb-omnibar` directive, the omnibar is available as a native JavaScript component.  All the above information is still applicable, with the following additions.

### Required 3<sup>rd</sup> Party Libraries

The omnibar depends on several 3<sup>rd</sup> party JavaScript libraries. In order to include the omnibar on your site, you must first include [jQuery](http://jquery.com) and [easyXDM](http://easyxdm.net). The omnibar will also automatically include “json2” if it is not already included on your site. Any basic version of jQuery will be acceptable. The omnibar will dynamically include a higher version of jQuery if the minimum required version is not found on the page. However, it will use some minimum version to bootstrap this process.

### Include Omnibar JavaScript

After including the prerequisites third-party libraries, the page should include the main Omnibar.js file. This file will handle caching and versioning appropriately, so the URL used will not have to change to receive updates to the omnibar on your site:

<https://signin.blackbaud.com/omnibar.js> - Debug version

<https://signin.blackbaud.com/omnibar.min.js> - Minified version for production use

### Initialize the Omnibar

In addition to loading the omnibar JavaScript file, a few lines of HTML must be included to create a placeholder element for the omnibar and to load the JavaScript with custom settings. Create an empty DIV to hold the omnibar. Then execute the script function `BBAUTH.Omnibar.load` to initialize the omnibar. The first parameter to the function is the DOM element that was created for holding the omnibar. The second is an object defining options for the omnibar. The most pressing option is `serviceName` which allows you to specify the display name for the current service. Below is an example of including this on the page.

```markup
<div id="omnibar" />
<script>
BBAUTH.Omnibar.load(document.getElementById("omnibar"), { serviceName: "Omnibar Test Page" });
</script>
```
### Styling for the Omnibar

By including the omnibar JavaScript file, special CSS content will be automatically loaded into your site for styling the omnibar. The bar will automatically dock at the top of the screen and float at the top of the screen as the user scrolls down your site.

### Refresh User Data

The omnibar caches information about the user such as their name, email, and product/database links. These items are cached on the client for the duration of their authentication session. The user can log out and log back in to have this information updated in the omnibar.

Alternatively, the product can call a well-known JavaScript function to tell the omnibar to refresh this data without waiting on the user to log out and back in:

```js
BBAUTH.Omnibar.refreshUserData(successCallback, failureCallback);
```

### Sample Site

Below is an HTML sample page that implements each of the steps described above to include the omnibar.

```markup
<!DOCTYPE html>
<html>
<head>

  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery.js"></script>
  <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/easyXDM/2.4.17.1/easyXDM.min.js"></script>
  <script src="//signin.blackbaud.com/Omnibar.min.js"></script>

</head>
<body class="bb-omnibar-height-padding">

  <div style="height: 1500px;">Including some height to demonstrate scrolling.</div>
  <div id="omnibar"></div>

<script>
BBAUTH.Omnibar.load(document.getElementById("omnibar"), {
  serviceName: "Omnibar Test Page"
});
</script>

</body>
</html>­­­­
```
{{/markdown }}

  </uib-tab>
</uib-tabset>
</div>
