# SimpleLogin sdk.js

The [SimpleLogin](https://simplelogin.io) sdk.js library is created to facilitate adding SimpleLogin button to your webapp.

The SDK is based on [hello.js](https://github.com/MrSwitch/hello.js).

To use it, first include the SDK into the html and add the "Login with SimpleLogin" button:

```html
<button id="btn-simplelogin">Login with Simplelogin</button>
<div id="user-info"></div>

<script src="https://simplelogin.io/sdk/sdk.js"></script>
```

Second, use it to log user in. Please make sure to replace `{your SimpleLogin client-oauth-id}`.

```js
SL.init("{your SimpleLogin client-oauth-id}");

document.getElementById("btn-simplelogin").onclick = function(e) {
  SL.login(function(user) {
    console.log("got user from SL SDK", user);    

    document.getElementById("user-info").innerHTML = `
    email: ${user.email} <br>
    name: ${user.name} <br>
    avatar: <img src="${user.avatar_url}">
    `
  })
}
```

Voilà, simple (as in SimpleLogin) isn't it 😉?

This example also included in [example](./example)

## Doc:

Adding the SDK will add the object `SL` to `window`. There are 2 main methods:

`SL.init("your oauth client id")`: init SDK

`SL.login(callback)`: once user is logged in, `callback` will be called with `user` as parameter.




