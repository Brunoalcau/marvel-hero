import {save, get} from '../utils';

export const loginIn = (publicKey, privateKey) => {
    const login = {publicKey, privateKey};
    save('login', login);
    return dispatch => {
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: login
        });    
    }
}

export const getKeys = () => {
    return async dispatch => {
        function onSuccess(success) {
            dispatch({
                type: 'GET_LOGIN_SUCCESS',
                payload: success
            });
            return success;
        }
        function onError(error) {
            dispatch({
                type: 'GET_LOGIN_ERROR',
                error
            });
            return error;
        }
        try {
            const login = get('login', true);
            return onSuccess(login);
        } catch(e) {
            return onError(e);
        }
    }
}

