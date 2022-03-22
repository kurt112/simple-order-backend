# Getting Started With Simple-Order (Backend)
<hr/>
This is a sample implementation of PEARLPAY PAYMENT GATEWAY with express js

## Building from source
<hr/>


## Available Scripts

In the project directory, you can run:
1. `npm` installed - goto http://nodejs.org/download/ to download installer for your OS.
<hr/>

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

### `npm run watch`
Runs the app in the development mode with nodemon.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.

<hr/>

## `Available API ENDPOINT`

`POST` ${baseURL}+pay\
`BODY`\
data: {
  - amount:  Number(amount_value) | Required,
  - txnid: String(tnxid_value) | Required,
  - callback_url: URL(url_value) | Required,
  - name: String(name_value),
  - mobile: String(mobile_value)
  - description: String(description_value),
  - redirect_url: String(redirect_url_value),
  - expires_at: DateTime<YYYY-MM-DD HH:MM:SS>(expire_value)\
}






### `Author`
[Kurt Lupin Orioque](https://github.com/kurt112)