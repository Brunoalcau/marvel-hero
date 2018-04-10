import crypto from 'crypto';
import {get} from './localStorage';
export const params = () => {
	const timestamp = new Date().getTime();
	const {privateKey, publicKey} = get('login', true);
	const hash = crypto.createHash('md5').update(timestamp + privateKey + publicKey).digest('hex');
	const params = `ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
	return params;
};