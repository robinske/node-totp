# TOTP playground with Node.js & Speakeasy

## Set up

Clone this repo and install the dependencies:

```
git clone git@github.com:robinske/node-totp.git
npm install
```

Navigate to the Node REPL 

```
node
```

and load the helper functions

```js
.load totp.js
```

Generate a QR code and scan it with the [Authy app](https://authy.com/download). This should open a browser window with a QR code.

```js
generateQRcode();
```

Now you have a TOTP, try verifying it with Speakeasy:

```js
verifyToken('042366');
> true
```

Try verifying the same token again after it's expired in the app and see what happens.