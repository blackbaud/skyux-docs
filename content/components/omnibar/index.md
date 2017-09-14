---
layout: layout-container
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

<bb-alert bb-alert-type="warning">
  <div class="media">
    <div class="media-body">
      <h4 class="media-heading" id="advanced-users-only">For Blackbaud Internal Use Only</h4>
      The omnibar component and omnibar service are not currently available for third-party custom applications.
    </div>
  </div>
</bb-alert>

<div ng-controller="OmnibarDocsController as omnibarDocsCtrl">
  <uib-tabset>
  <uib-tab heading="SKY UX" active="omnibarDocsCtrl.tab2Active" bb-tab-sref="TabAngularJS">

{{# markdown }}
The omnibar component provides a wrapper for the omnibar service and omnibar widget.  The omnibar features asynchronously loaded UI elements and integrates with user accounts to allow users to sign in and out, manage their accounts, and access purchased products.

<bb-alert bb-alert-type="info"><strong><em>Note:</em></strong> You can implement the omnibar with the `bb-omnibar` directive or as a native JavaScript component outside of SKY UX. This SKY UX tab describes the `bb-omnibar` directive, and the Standalone tab describes additional steps for a native JavaScript component.</bb-alert>

### Omnibar Placement

The omnibar automatically docks at the top of the page, so it is important to leave enough space to prevent the omnibar from overlaying important page content. To help create space, the omnibar automatically loads the `bb-omnibar-height-padding` and `bb-omnibar-height-margin` CSS classes. These classes set `padding-top` and `margin-top`, respectively, to the height that the omnibar requires and ensures that if the omnibar height changes, then the page adjusts automatically.

You should add **one** of these classes to the page's `body` element or to the wrapping DOM element that the page uses. Do not include both classes because that creates twice as much space as necessary. However, both classes are provided to account for any scenarios where it is important to specify whether to provide the space through padding or margin.

### CSS z-index

To avoid `z-index` issues, place the `bb-omnibar` directive at the bottom of the page to load it after other elements. This allows the omnibar and its flyouts to sit on top of the existing page. If the page includes dynamic content or you cannot load the omnibar last, then `z-index` issues may occur. In that scenario, you should create an omnibar `div` element and style it to ensure an appropriate `z-index` to resolve this.


### Mobile Meta Tag

To create a pleasant the user experience for screen sizes that do not have space for multiple flyouts, the omnibar automatically renders differently at different media breakpoints. To optimize how the omnibar works at smaller screen sizes, include the following `meta` tag in the page's `head` element.

To specify the menu items for the omnibar's dropdown menu on smaller screens, use the `bb-omnibar-`menu` property within the `bb-omnibar` element.

```markup
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
```

### bbOmnibarConfig Settings

- `afterLoad` &mdash; Specifies a function to be called after the omnibar loads. This is useful when binding events to the omnibar's search box.
- `appLookupUrl` &mdash; Specifies the URL for the application lookup service that provides database and product links for the current user. The default is the URL for the production instance.
- `contentKey` &mdash; Specifies the content key for the omnibar to use when redirecting users to the authentication service.
- `enableHelp` &mdash; Indicates whether to display a help button in the omnibar. Use this setting in conjunction with [the `bbHelp` component](../help/).
- `enableSearch` &mdash; Indicates whether to display a search box in the omnibar. You must still handle binding to the UI events for the search box.
- `productId` &mdash; Specifies an ID for a product that is registered with the omnibar service in order to display that product's logo in the omnibar header. This property is for internal Blackaud use only. For products that are not registered with the omnibar or to display text in place of a product logo, use the `serviceName` property instead.
- `searchPlaceholder` &mdash; Specifies placeholder text to display in the search box.
- `serviceName` &mdash; Specifies text to display in the omnibar header. This property is an alternative to the `productId` property that displays product logos for registered products only.
- `signInUrl` &mdash; Specifies where to redirect users after they sign in. The valid target domains include:
  -  blackbaud.com
  -  blackbaud-dev.com
  -  blackbaud-test.com
- `signOutUrl` &mdash; Specifies where to redirect users after they sign out. The valid target domains include:
  -  blackbaud.com
  -  blackbaud-dev.com
  -  blackbaud-test.com
- `tenantId` &mdash; When a user has access to multiple databases for a product, the omnibar may show the current database name to provide context. If this database is well-known from the application lookup service, then providing the omnibar with the current tenant ID will let it match up the current context with that well-known link and know what database name to show. Alternatively, if the tenant ID cannot be matched or is not provided, the omnibar can be provided with a database name directly and it may display that.
- `url` &mdash; Specifies the URL for the omnibar service JavaScript widget.
- `userLoaded` &mdash; Specifies a function to be called after loading the current user profile. The function is passed a user object that contains the following properties:
  - `id` &mdash; The user ID for the authentication service. If the user is not logged in, this property is null.
  - `emailAddress` &mdash; The user's email address. If the user is not logged in, this property is null.
  - `firstName` &mdash; The user's first name. If the first name is unknown, the property may be null.
  - `lastName` &mdash; The user's last name. If the last name is unknown, the property may be null.

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

In addition to creating the omnibar with the `bb-omnibar` directive, you can also create it as a native JavaScript component. All the information about the `bb-omnibar` directive applies to the native JavaScript component, and the following sections provide additional information.

### Required JavaScript Libraries

The omnibar depends on several third-party JavaScript libraries. To include the omnibar on your site, you must first include [jQuery](http://jquery.com) and [easyXDM](http://easyxdm.net). The omnibar also automatically includes “json2” if your site does not already include it.

### Omnibar JavaScript File

After the JavaScript library prerequisites are in place, you include an omnibar.js file on the page to handle caching and versioning so that the URL does not need to change to receive updates to the omnibar.

- <https://signin.blackbaud.com/omnibar.js> &mdash; Debug version
- <https://signin.blackbaud.com/omnibar.min.js> &mdash; Minified version for production use

The omnibar JavaScript file automatically loads special CSS content to style the omnibar. The omnibar automatically docks at the top of the page and floats there when users scroll down.

### Omnibar Placeholder Element

After you load the omnibar JavaScript file, you need a few lines of HTML on the page to create a placeholder element for the omnibar and some JavaScript to initialize the omnibar. Create an empty `div` element to hold the omnibar, and then execute the script function `BBAUTH.Omnibar.load` to initialize the omnibar. The first parameter to the function is the DOM element that holds the omnibar. The second parameter is an object that defines options for the omnibar. The most important option is `serviceName`, which allows you to specify text to display in the omnibar header.

```markup
<div id="omnibar"></div>
<script>
BBAUTH.Omnibar.load(document.getElementById("omnibar"), { serviceName: "Omnibar Test Page" });
</script>
```

### Refresh User Data

The omnibar caches information about users such as name, email, and product and database links. The omnibar caches these items on the client for the duration of the authentication session. Users can log out and log back in to update this information in the omnibar.

Alternatively, the product can call a well-known JavaScript function to prompt the omnibar to refresh data without waiting for users to log out and log back in.

```js
BBAUTH.Omnibar.refreshUserData(successCallback, failureCallback);
```

### Sample Site

The following HTML code sample demonstrates a page that implements each step to include the omnibar as a native JavaScript component.

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
