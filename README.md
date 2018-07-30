# appfollow-api-js

## Установка

    npm install appfollow-api-js

Или:

    yarn add appfollow-api-js
    
    
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
