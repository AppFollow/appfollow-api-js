import md5 from 'crypto-md5';

export const ASO_BASE_URL = 'http://api.appfollow.io/aso';
export const BASE_URL = 'http://api.appfollow.io';

export const sortObject = obj => {
	const sorted = {};
	const arrayKeys = [];

	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			arrayKeys.push(key);
		}
	}

	arrayKeys.sort();

	for (let key of arrayKeys) {
		sorted[key] = obj[key];
	}

	return sorted;
}

export const makeSign = (params, endpoint, apiSecret) => {
	params = sortObject(params);

	let signString = '';

	for (let attr in params) {
		signString += `${attr}=${params[attr]}`;
	};

	signString += endpoint + apiSecret;

	return sign(signString);
};

export const sign = (message = 'thisisteststring') => md5(message, 'hex')
