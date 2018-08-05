# AppFollow API js
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

## Установка

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

## Функции и параметры
 * `BASE_URL`: адрес апи
 * `sortObject(obj)`: функция для сортировки свойств объект по алфавиту
 * `sign(message)`: функция для хеширования строки
 * `makeSign(params, endpoint, apiSecret)`: функция для полученя подписи, параметры: объект параметров, конечная точка, api secret

## Пример
Получить список всех коллекций:
```
import {makeSign, BASE_URL} from 'appfollow-api-js';

const cid = 777;
const apiSecret = 'appfollow';
const endpoint = '/apps';
const sign = makeSign({cid}, endpoint, apiSecret);
const url = `${BASE_URL}${endpoint}?cid=${cid}&sign=${sign}`;
```
