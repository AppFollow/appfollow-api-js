import MD5 from 'md5.js';

export const ASO_BASE_URL = 'http://api.appfollow.io/aso';
export const BASE_URL = 'http://api.appfollow.io';

export const sign = (message = 'thisisteststring') => new MD5().update(message).digest('hex');

export const sortObject = obj => {
	const sorted = {};
	const arrayKeys = [];

	Object.keys(obj).forEach(key => {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			arrayKeys.push(key);
		}
	});

	arrayKeys.sort();

	Object.keys(arrayKeys).forEach(key => {
		sorted[key] = obj[key];
	});

	return sorted;
};

export const makeSign = (params, endpoint, apiSecret) => {
	const sortParams = sortObject(params);

	let signString = '';

	Object.keys(sortParams).forEach(attr => {
		signString += `${attr}=${sortParams[attr]}`;
	});

	signString += endpoint + apiSecret;

	return sign(signString);
};
