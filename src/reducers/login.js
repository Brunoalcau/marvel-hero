import {cloneDeep} from 'lodash';

const initial = {
	publicKey: '',
	privateKey: ''
};

const get = (state, {payload}) => {
	const newState = cloneDeep(state);
	newState.privateKey = payload.privateKey;
	newState.publicKey = payload.publicKey;
	return newState;
};

export const login = (state = initial, action) => {
	switch(action.type) {
		case 'LOGIN_SUCCESS': 
			return get(state, action);
		case 'GET_LOGIN_SUCCESS': 
			return get(state, action);
		default:
			return state;
	}
}