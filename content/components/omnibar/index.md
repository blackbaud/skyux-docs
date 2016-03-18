---
icon: bars
summary: The Omnibar provides a common UI element for Blackbaud products so users have a seamless experience as they navigate through the Blackbaud ecosystem.
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
      <h4 class="media-heading" id="advanced-users-only">Blackbaud Only</h4>
      The Omnibar component and Omnibar Service are currently only available to Blackbaud applications.
    </div>
  </div>
</div>

<div ng-controller="OmnibarDocsController as omnibarDocsCtrl">
  <uib-tabset>
  <uib-tab heading="AngularJS" active="omnibarDocsCtrl.tab2Active" bb-tab-sref="TabAngularJS">

{{# markdown }}
The Omnibar component provides a wrapper to the Omnibar Service and Omnibar Widget.  The Omnibar consists of asynchronously loaded UI elements and integration with a user's account, such as links to sign out, account management, and access to purchased products.

### Visual Space Placeholder

Because the Omnibar automatically docks at the top of the page, it is important to configure the existing page to leave some blank space at the top so that the Omnibar doesn’t overlay important page content. The Omnibar automatically includes 2 CSS classes that assist in creating this visual placeholder space with your page: `bb-omnibar-height-padding` and `bb-omnibar-height-margin`.

These styles are loaded in with the Omnibar and define padding-top and margin-top respectively, to the height required by the Omnibar. By using these CSS classes, you ensure that if the height of the Omnibar is changed then the consuming page will automatically adjust for it.

You should add **one** of these classes to your `body` element or whatever wrapping DOM element your page uses. Only include one of these classes as you don’t want to create twice the space required. The two classes are provided in case it is important to the consumer to use either padding or margin in their use case.

### CSS z-index

Including the `<bb-omnibar>` component at the bottom of your page may avoid z-index issues since it will be laid out after your other elements, and therefore easily sit on top of the existing page. It is important that the Omnibar flyouts will float above the current page. If you have dynamic content or it is not possible to load the Omnibar last on the page, then z-index issues may occur. In that case, you should style the Omnibar DIV element that you created to ensure an appropriate z-index to resolve this.

### Mobile Meta Tag

The Omnibar automatically renders different for small mobile devices in order to create a pleasant experience when there is not room for multiple fly outs from the bar. The Omnibar was created with the following meta-tags included to optimize how the page works on a mobile device. For ideal consumption of the Omnibar, the page should include the following meta tag in its `<head>`.

```markup
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
```

### bbOmnibarConfig Settings

- `afterLoad` &mdash; A function which will be called after the Omnibar has successfully loaded.  Useful if binding events to the search box.
- `appLookupUrl` &mdash; Application Lookup Service URL.  This service provides applicable database / product links for the current user.  Default is the production instance.
- `contentKey` &mdash; Indicates that the Omnibar should supply this content key when redirecting the user to the Authentication Service.
- `enableHelp` &mdash; Controls whether the help button is visible in the Omnibar.  This setting should be used in conjunction with the [bbHelp component](../help/).
- `enableSearch` &mdash; Controls whether the search box is visible in the Omnibar.  You must still handle binding to the UI events for the search box.
- `productId` &mdash; ID used for specifying a registered product with the Omnibar Service.  This is currently reserved as an internal implementation.  Consider using the `serviceName` property instead.
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
- `tenantId` &mdash; When a user has access to multiple databases for a product, the Omnibar may show the current database name to provide context. If this database is well-known from the Application Lookup Service, then providing the Omnibar with the current Tenant Id will let it match up the current context with that well-known link and know what database name to show. Alternatively, if the tenant id cannot be matched or is not provided, the Omnibar can be provided with a database name directly and it may display that.
- `url` &mdash; URL of the Omnibar Service JavaScript widget.
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
  <uib-tab heading="Native" active="omnibarDocsCtrl.tab1Active" bb-tab-sref="TabNative">

{{# markdown }}

In addition to using the `bb-omnibar` directive, the Omnibar is available as a native JavaScript component.  All the above information is still applicable, with the following additions.

### Required 3<sup>rd</sup> Party Libraries

The Omnibar depends on several 3<sup>rd</sup> party JavaScript libraries. In order to include the Omnibar on your site, you must first include [jQuery](http://jquery.com) and [easyXDM](http://easyxdm.net). The Omnibar will also automatically include “json2” if it is not already included on your site. Any basic version of jQuery will be acceptable. The Omnibar will dynamically include a higher version of jQuery if the minimum required version is not found on the page. However, it will use some minimum version to bootstrap this process.

### Include Omnibar JavaScript

After including the prerequisites 3<sup>rd</sup> party libraries, the page should include the main Omnibar.js file. This file will handle caching and versioning appropriately, so the URL used will not have to change to receive updates to the Omnibar on your site:

<https://signin.blackbaud.com/omnibar.js> - Debug version

<https://signin.blackbaud.com/omnibar.min.js> - Minified version for production use

### Initialize the Omnibar

In addition to loading the Omnibar JavaScript file, a few lines of HTML must be included to create a placeholder element for the Omnibar and to load the JavaScript with custom settings. Create an empty DIV to hold the Omnibar. Then execute the script function `BBAUTH.Omnibar.load` to initialize the Omnibar. The first parameter to the function is the DOM element that was created for holding the Omnibar. The second is an object defining options for the Omnibar. The most pressing option is `serviceName` which allows you to specify the display name for the current service. Below is an example of including this on the page.

```markup
<div id="omnibar" />
<script>
BBAUTH.Omnibar.load(document.getElementById("omnibar"), { serviceName: "Omnibar Test Page" });
</script>
```
### Styling for the Omnibar

By including the Omnibar JavaScript file, special CSS content will be automatically loaded into your site for styling the Omnibar. The bar will automatically dock at the top of the screen and float at the top of the screen as the user scrolls down your site.

### Refresh User Data

The Omnibar caches information about the user such as their name, email, and product/database links. These items are cached on the client for the duration of their authentication session. The user can log out and log back in to have this information updated in the Omnibar.

Alternatively, the product can call a well-known JavaScript function to tell the Omnibar to refresh this data without waiting on the user to log out and back in:

```js
BBAUTH.Omnibar.refreshUserData(successCallback, failureCallback);
```

### Sample Site

Below is an HTML sample page that implements each of the steps described above to include the Omnibar.

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
