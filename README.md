# AppFollow API js

# Package no longer supported. Use API instead https://appfollow.docs.apiary.io

<p>
  <a href="https://www.npmjs.com/package/appfollow-api-js">
    <img src="https://img.shields.io/npm/v/appfollow-api-js.svg?style=flat-square" alt="version">
  </a>
  <a href="https://github.com/AppFollow/appfollow-api-js/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/appfollow-api-js.svg?style=flat-square" alt="ISC license">
  </a>
  <a href="http://npmcharts.com/compare/appfollow-api-js">
    <img src="https://img.shields.io/npm/dm/appfollow-api-js.svg?style=flat-square" alt="downloads">
  </a>
</p>

## Install

```sh
npm install appfollow-api-js
# or
yarn add appfollow-api-js
```

###### Download

- [Minified](https://cdn.jsdelivr.net/npm/appfollow-api-js/dist/api-sign.min.js)

###### CDN

- [jsDelivr](https://www.jsdelivr.com/package/npm/appfollow-api-js)
- [unpkg](https://unpkg.com/appfollow-api-js/)

## Functions and parameters
 * `BASE_URL`: API url
 * `sortObject(obj)`: The function of sorting the properties of the object in alphabetical order
 * `sign(message)`: Function for hashing a string
 * `makeSign(params, endpoint, apiSecret)`: Function for get a signature, parameters: object of params, end point, api secret

## Example
Get a list of all collections:
```
import {makeSign, BASE_URL} from 'appfollow-api-js';

const cid = 777;
const apiSecret = 'appfollow';
const endpoint = '/apps';
const sign = makeSign({cid}, endpoint, apiSecret);
const url = `${BASE_URL}${endpoint}?cid=${cid}&sign=${sign}`;
```
