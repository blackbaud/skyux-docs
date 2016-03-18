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

<div ng-controller="OmnibarDocsController as omnibarDocsCtrl">
  <uib-tabset>
  <uib-tab heading="AngularJS" active="omnibarDocsCtrl.tab2Active" bb-tab-sref="TabAngularJS">

  <p>The purpose of this document is to describe how to include the &#x201C;Omnibar&#x201D; on a consuming page. The Omnibar provides a common UI element for Blackbaud products so users have a seamless experience as they navigate through the Blackbaud ecosystem. It provides some standard integration with the user&#x2019;s account, such as links to sign out, account management, and access to purchased products.</p>
  <p>There will be some required steps to include the Omnibar as well as some optional flags and features for a closer integration, which may evolve over time. Please follow the steps in this document to include the Omnibar in the product and consider which optional integration points may be relevant for you.</p>
  <h3 id="bbomnibarconfig-settings">bbOmnibarConfig Settings</h3>
  <ul>
  <li><p><code>afterLoad</code> &#x2014; The Omnibar supports firing a callback function after it finishes loading. Because the Omnibar loads asynchronously, this may be useful for the consuming application to know when it is loaded. This is helpful when binding events to the optional search box element. To register for this callback, assign the desired callback function to an &#x201C;afterLoad&#x201D; property on the options object. The callback will be executed without any parameters.</p>
  </li>
  <li><p><code>appLookupUrl</code> &#x2014; The Omnibar integrates with an Application Lookup Service for identifying product / database links that a user should have access to and provides UI for users to navigate between these resources. By default, the Omnibar will integrate with the production instance of the Application Lookup Service, but for internal use, it is often convenient to see links to your internal products. For example, your application running in CDEV may want to tell the Omnibar to load its application links from the CDEV Application Lookup Service which will know about your CDEV application instance. The production Application Lookup Service will not know about any internal environments.</p>
  </li>
  <li><p><code>enableHelp</code> &#x2014; A common Blackbaud Help Widget has been created that is similar in concept to the Omnibar. It will provide a common UI experience for product help content that is embedded into the product from an external location. To some extent, it works with the Omnibar to provide a good visual user experience. If the product consuming the Omnibar intends to include this help widget, then it should inform the Omnibar so that they will cooperate together. To include the help on the page with the Omnibar, include &#x201C;enableHelp: true&#x201D; in the Omnibar options object.</p>
  </li>
  <li><p><code>enableSearch</code> &#x2014; The Omnibar provides a common search box that responds nicely in mobile devices. By default, the search box is not included in the Omnibar. To include the search box in the Omnibar, include &#x201C;enableSearch: true&#x201D; in the Omnibar options object. This will only include the
  UI element for the search box, providing a consistent styling and UI experience. However, the consuming application will still need to bind whatever text events to the box and/or search button to create an actual search experience.</p>
  </li>
  <li><p><code>productId</code> &#x2014; The Omnibar is aware of certain products and will show a custom header when the user is in that product. This will allow product links within the Omnibar to be visually identical to the header that is shown when the user is actually in that product. It also provides a more branded experience for that product rather than just showing the text of the product name. You can specify &#x201C;productId: ...&#x201D; in the Omnibar options object to indicate to the Omnibar what product the user is currently in. This will cause the custom header to show and is also critical for the database context links to work appropriately as well. The Omnibar will only show database links for the product that the user is currently in.</p>
  </li>
  <li><p><code>searchPlaceholder</code> &#x2014; The maximum allowed size of a file to be uploaded in bytes.  Default is 500000.</p>
  </li>
  <li><p><code>serviceName</code> &#x2014; An alternative to providing the productId option to the Omnibar, you can specify &#x201C;serviceName: ...&#x201D; in the Omnibar options object to provide text that Omnibar can show in the header in lieu of a custom header logo.</p>
  </li>
  <li><p><code>signInUrl</code> &#x2014; The Omnibar provides a Sign In link automatically which links anonymous users to the Authentication Service. The Authentication Service supports redirecting the user to a specific URL after sign in is complete. You can specify &#x201C;signInRedirectUrl: https://.....&#x201D; in the Omnibar options object to indicate where the user should be redirected after signing in. The target domain must be a valid relying party for this to be honored.</p>
  </li>
  <li><p><code>signOutUrl</code> &#x2014; The Omnibar provides a Sign Out link automatically which links the user to the Authentication Service. The Authentication Service supports redirecting the user to a specific URL after sign out is complete. You can specify &#x201C;signOutRedirectUrl: https://.....&#x201D; in the Omnibar options object to indicate where the user should be redirected after signing out. The target domain must be a valid relying party for this to be honored.</p>
  </li>
  <li><p><code>tenantId</code> &#x2014; When a user has access to multiple databases for a product, the Omnibar may show the current database name to provide context. If this database is well-known from the Application Lookup Service, then providing the Omnibar with the current Tenant Id will let it match up the current context with that well-known link and know what database name to show. Alternatively, if the tenant id cannot be matched or is not provided, the Omnibar can be provided with a database name directly and it may display that. You can specify &#x201C;tenantId: ...&#x201D; and/or &#x201C;databaseName: &#x2026;&#x201D; in the Omnibar options object to inform the Omnibar about the current database context so that it may show that database context information when appropriate.</p>
  </li>
  <li><p><code>userLoaded</code> &#x2014; The Omnibar can fire a callback function after it loads the user&#x2019;s profile information. This can be helpful to ensure that the consuming applications view of the user is in sync with the Omnibar&#x2019;s view of the user. Because the Omnibar is always watching for changes to the user profile, this callback may be fired multiple times &#x2013;whenever the users profile is perceived to have changed it will be called once, as well as when the page initially loads. To register for this callback, assign the desired callback function to a &#x201C;userLoaded&#x201D; property on the options object. The callback will be executed with a single parameter representing the user&#x2019;s profile. The following are properties that can be found on the profile object:</p>
  <ul>
  <li>firstName &#x2014; the first name of the user. (May be null if not known).</li>
  <li>lastName &#x2014; the last name of the user. (May be null if not known).</li>
  <li>emailAddress &#x2014; the email address of the user. (Only null if the user is not logged in.)</li>
  <li>id &#x2014; the unique Authentication Service User ID for the user. (Only null if the user is not logged in).</li>
  </ul>
  </li>
  </ul>









    <h2 id="markup">Markup</h2>
    <pre><code class="language-markup" ng-non-bindable="">&lt;bb-omnibar&gt;
    &lt;bb-omnibar-menu&gt;
      &lt;ul class=&quot;bb-omnibar-productmenu&quot;&gt;
        &lt;li&gt;
          &lt;a href=&quot;#&quot;&gt;Menu Item 1&lt;/a&gt;
        &lt;/li&gt;
        &lt;li&gt;
          &lt;a href=&quot;#&quot;&gt;Menu Item 2&lt;/a&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
    &lt;/bb-omnibar-menu&gt;
  &lt;/bb-omnibar&gt;
  </code></pre>
    <textarea class="raw-markup hide" ng-non-bindable="">&lt;bb-omnibar&gt;
    &lt;bb-omnibar-menu&gt;
      &lt;ul class=&quot;bb-omnibar-productmenu&quot;&gt;
        &lt;li&gt;
          &lt;a href=&quot;#&quot;&gt;Menu Item 1&lt;/a&gt;
        &lt;/li&gt;
        &lt;li&gt;
          &lt;a href=&quot;#&quot;&gt;Menu Item 2&lt;/a&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
    &lt;/bb-omnibar-menu&gt;
  &lt;/bb-omnibar&gt;
  </textarea>



    <h2 id="js">JavaScript</h2>
    <pre><code class="language-javascript" ng-non-bindable="">angular.module(&apos;skyux-demo&apos;, [])
      .constant(&apos;bbOmnibarConfig&apos;, {
          appLookupUrl: &apos;&apos;,
          enableHelp: false,
          enableSearch: false,
          productId: &apos;Sky&apos;,
          searchPlaceholder: &apos;Search&apos;,
          serviceName: &apos;Sky&apos;,
          signOutUrl: &apos;&apos;,
          tenantId: &apos;&apos;,
          url: &apos;https://signin.blackbaud.com/omnibar.min.js&apos;,
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
  </code></pre>
    <textarea class="raw-js hide" ng-non-bindable="">angular.module(&apos;skyux-demo&apos;, [])
      .constant(&apos;bbOmnibarConfig&apos;, {
          appLookupUrl: &apos;&apos;,
          enableHelp: false,
          enableSearch: false,
          productId: &apos;Sky&apos;,
          searchPlaceholder: &apos;Search&apos;,
          serviceName: &apos;Sky&apos;,
          signOutUrl: &apos;&apos;,
          tenantId: &apos;&apos;,
          url: &apos;https://signin.blackbaud.com/omnibar.min.js&apos;,
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
  </textarea>

  </uib-tab>
    <uib-tab heading="Native" active="omnibarDocsCtrl.tab1Active" bb-tab-sref="TabNative">

{{# markdown }}
The purpose of this document is to describe how to include the “Omnibar” on a consuming page. The Omnibar provides a common UI element for Blackbaud products so users have a seamless experience as they navigate through the Blackbaud ecosystem. It provides some standard integration with the user’s account, such as links to sign out, account management, and access to purchased products. Below is a simple screenshot showing the Omnibar, which docks at the top of consuming pages.  

![Omnibar](/assets/img/omnibar.png)

There will be some required steps to include the Omnibar as well as some optional flags and features for a closer integration, which may evolve over time. Please follow the steps in this document to include the Omnibar in the product and consider which optional integration points may be relevant for you.

## Including the Omnibar

### Register as a Relying Party

In order for the Omnibar to load user profile information, the consuming website domain must be a registered relying part of the Authentication Service. By default, any domain under the following domains are already an approved relying party. If you are using a different domain than that, then please contact the Authentication Service team to be added.

-   Blackbaud.com
-   Blackbaud-dev.com
-   Blackbaud-test.com

### Required 3<sup>rd</sup> Party Libraries

The Omnibar depends on several 3<sup>rd</sup> party JavaScript libraries. In order to include the Omnibar on your site, you must first include [jQuery] and [easyXDM]. The Omnibar will also automatically include “json2” if it is not already included on your site. Any basic version of jQuery will be acceptable. The Omnibar will dynamically include a higher version of jQuery if the minimum required version is not found on the page. However, it will use some minimum version to bootstrap this process.

### Include Omnibar JavaScript

After including the prerequisites 3<sup>rd</sup> party libraries, the page should include the main Omnibar.js file. This file will handle caching and versioning appropriately, so the URL used will not have to change to receive updates to the Omnibar on your site:

<https://signin.blackbaud.com/omnibar.js> - Debug version

<https://signin.blackbaud.com/omnibar.min.js> - Minified version for production use

### Initialize the Omnibar

In addition to loading the Omnibar JavaScript file, a few lines of HTML must be included to create a placeholder element for the Omnibar and to load the JavaScript with custom settings. Create an empty DIV to hold the Omnibar. Then execute the script function “BBAUTH.Omnibar.load” to initialize the Omnibar. The first parameter to the function is the DOM element that was created for holding the Omnibar. The second is an object defining options for the Omnibar. The most pressing option is **serviceName** which allows you to specify the display name for the current service. Below is an example of including this on the page.

```markup
<div id="omnibar" />
<script>
BBAUTH.Omnibar.load(document.getElementById("omnibar"), { serviceName: "Omnibar Test Page" });
</script>
```

### Styling for the Omnibar

By including the Omnibar JavaScript file, special CSS content will be automatically loaded into your site for styling the Omnibar. The bar will automatically dock at the top of the screen and float at the top of the screen as the user scrolls down your site.

#### Visual Space Placeholder

> Because the Omnibar automatically docks at the top of the page, it is important to configure the existing page to leave some blank space at the top so that the Omnibar doesn’t overlay important page content. The Omnibar automatically includes 2 CSS classes that assist in creating this visual placeholder space with your page: **bb-omnibar-height-padding** and **bb-omnibar-height-margin**
>
> These styles are loaded in with the Omnibar and define padding-top and margin-top respectively, to the height required by the Omnibar. By using these CSS classes, you ensure that if the height of the Omnibar is changed then the consuming page will automatically adjust for it.
>
> You could simple add **one** of these classes to your &lt;body&gt; element or whatever wrapping DOM element your page uses. Only include one of these classes as you don’t want to create twice the space required. The two classes are provided in case it is important to the consumer to use either padding or margin in their use case.

#### Z-Index

> Including the Omnibar html snippet at the bottom of your page may avoid z-index issues since it will be laid out after your other elements, and therefore easily sit on top of the existing page. It is important that the Omnibar flyouts will float above the current page. If you have dynamic content or it is not possible to load the Omnibar last on the page, then z-index issues may occur. In that case, you should style the Omnibar DIV element that you created to ensure an appropriate z-index to resolve this.

### Mobile Meta Tag (Optional)

The Omnibar automatically renders different for small mobile devices in order to create a pleasant experience when there is not room for multiple fly outs from the bar. The Omnibar was created with the following meta-tags included to optimize how the page works on a mobile device. For ideal consumption of the Omnibar, the page should include the following meta tag in its &lt;head&gt;.

```markup
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
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
BBAUTH.Omnibar.load(document.getElementById("omnibar"), { serviceName: "Omnibar Test Page" });
</script>

</body>
</html>­­­­
```

## Additional Integration Points

These are optional configuration settings that enhance how your product integrates with the Omnibar. More options may be added over time so check back here for the latest on the flags and features available for optional integration points.

### After Load

The Omnibar supports firing a callback function after it finishes loading. Because the Omnibar loads asynchronously, this may be useful for the consuming application to know when it is loaded. This is helpful when binding events to the optional search box element. To register for this callback, assign the desired callback function to an “afterLoad” property on the options object. The callback will be executed without any parameters.

### Application Lookup Url

The Omnibar integrates with an Application Lookup Service for identifying product / database links that a user should have access to and provides UI for users to navigate between these resources. By default, the Omnibar will integrate with the production instance of the Application Lookup Service, but for internal use, it is often convenient to see links to your internal products. For example, your application running in CDEV may want to tell the Omnibar to load its application links from the CDEV Application Lookup Service which will know about your CDEV application instance. The production Application Lookup Service will not know about any internal environments.

You can specify “appLookupUrl: https://.....” in the Omnibar options object to indicate that the Omnibar should use a different instance of the Application Lookup Service. Remember, the Omnibar caches users links throughout the duration of their Authentication Service session or until you invoke the Refresh User Data API function.

### Content Key

The Omnibar provides direct links to Sign In and Sign Out of the Authentication Service. There is a feature of the Authentication Service described in the “Integrating with Authentication Service” document about custom content keys. You can specify “contentKey: …” in the Omnibar options object to indicate that the Omnibar should supply this content key when redirecting the user to the Authentication Service.

### Enable Search

The Omnibar provides a common search box that responds nicely in mobile devices. By default, the search box is not included in the Omnibar. To include the search box in the Omnibar, include “enableSearch: true” in the Omnibar options object.

This will only include the UI element for the search box, providing a consistent styling and UI experience. However, the consuming application will still need to bind whatever text events to the box and/or search button to create an actual search experience.

### Custom Search

As an alternative to the built-in search box that “enableSearch:true” provides, the Omnibar contains specific HTML DIV that consumers can render in a custom search box. If the consuming application needs a different look and feel or functionality for their search, this may be a better alternative. The application should not enable the default search but just render what it wants into the DIV with id “omnibar\_customsearch”. There is also a separate DIV with id “omnibar\_mobilecustomsearch” which exists on the mobile version of the Omnibar. The product should render a search box there as well if it wants search for mobile.

### Enable Help

A common Blackbaud Help Widget has been created that is similar in concept to the Omnibar. It will provide a common UI experience for product help content that is embedded into the product from an external location. To some extent, it works with the Omnibar to provide a good visual user experience. If the product consuming the Omnibar intends to include this help widget, then it should inform the Omnibar so that they will cooperate together. To include the help on the page with the Omnibar, include “enableHelp: true” in the Omnibar options object.

### Product Id

The Omnibar is aware of certain products and will show a custom header when the user is in that product. This will allow product links within the Omnibar to be visually identical to the header that is shown when the user is actually in that product. It also provides a more branded experience for that product rather than just showing the text of the product name.

You can specify “productId: ...” in the Omnibar options object to indicate to the Omnibar what product the user is currently in. This will cause the custom header to show and is also critical for the database context links to work appropriately as well. The Omnibar will only show database links for the product that the user is currently in.

### Refresh User Data

The Omnibar caches information about the user such as their name, email, and product/database links. These items are cached on the client for the duration of their authentication session. The user can log out and log back in to have this information updated in the Omnibar.

Alternatively, the product can call a well-known JavaScript function to tell the Omnibar to refresh this data without waiting on the user to log out and back in:

```js
BBAUTH.Omnibar.refreshUserData(successCallback, failureCallback);
```

A callback function can be provided for success and failure scenarios respectively.

### Service Name

An alternative to providing the productId option to the Omnibar, you can specify “serviceName: ...” in the Omnibar options object to provide text that Omnibar can show in the header in lieu of a custom header logo.

### Sign In Redirect Url

The Omnibar provides a Sign In link automatically which links anonymous users to the Authentication Service. The Authentication Service supports redirecting the user to a specific URL after sign in is complete. You can specify “signInRedirectUrl: https://.....” in the Omnibar options object to indicate where the user should be redirected after signing in. The target domain must be a valid relying party for this to be honored.

### Sign Out Redirect Url

The Omnibar provides a Sign Out link automatically which links the user to the Authentication Service. The Authentication Service supports redirecting the user to a specific URL after sign out is complete. You can specify “signOutRedirectUrl: https://.....” in the Omnibar options object to indicate where the user should be redirected after signing out. The target domain must be a valid relying party for this to be honored.

### Tenant Id / Database Name

When a user has access to multiple databases for a product, the Omnibar may show the current database name to provide context. If this database is well-known from the Application Lookup Service, then providing the Omnibar with the current Tenant Id will let it match up the current context with that well-known link and know what database name to show. Alternatively, if the tenant id cannot be matched or is not provided, the Omnibar can be provided with a database name directly and it may display that.

You can specify “tenantId: ...” and/or “databaseName: …” in the Omnibar options object to inform the Omnibar about the current database context so that it may show that database context information when appropriate.

### User Loaded

The Omnibar can fire a callback function after it loads the user’s profile information. This can be helpful to ensure that the consuming applications view of the user is in sync with the Omnibar’s view of the user. Because the Omnibar is always watching for changes to the user profile, this callback may be fired multiple times –whenever the users profile is perceived to have changed it will be called once, as well as when the page initially loads. To register for this callback, assign the desired callback function to a “userLoaded” property on the options object. The callback will be executed with a single parameter representing the user’s profile. The following are properties that can be found on the profile object:

-   firstName – the first name of the user. (May be null if not known).

-   lastName – the last name of the user. (May be null if not known).

-   emailAddress – the email address of the user. (Only null if the user is not logged in.)

-   id – the unique Authentication Service User ID for the user. (Only null if the user is not logged in).

  [jQuery]: http://jquery.com/
  [easyXDM]: http://easyxdm.net/

{{/ markdown }}
    </uib-tab>
  </uib-tabset>
</div>
