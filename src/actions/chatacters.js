import {LIMIT} from '../config';
import {params} from '../utils';

export const getCharacters = (offSet) => {
	return async dispatch => {
        function onSuccess(success) {
            dispatch({
                type: 'CHARACTERS_SUCCESS',
                payload: success
            });
            return success;
        }
        function onError(error) {
            dispatch({
                type: 'CHARACTERS_ERROR',
                error
            });
            return error;
        }
        try {
            const paramUrl = params();
        	const url = offSet 
            ? `https://gateway.marvel.com:443/v1/public/characters?limit=${LIMIT}&offset=${offSet}&${paramUrl}`
            : `https://gateway.marvel.com:443/v1/public/characters?limit=${LIMIT}&${paramUrl}`;
            const response = await fetch(url);
            const {data} = await response.json();
        	return onSuccess(data);
        } catch(e) {
            return onError(e);
        }
    }
}

export const getCharacter = (id) => {
 return async dispatch => {
        function onSuccess(success) {
            dispatch({
                type: 'CHARACTER_SUCCESS',
                payload: success
            });
            return success;
        }
        function onError(error) {
            dispatch({
                type: 'CHARACTER_ERROR',
                error
            });
            return error;
        }
        try {
            const paramUrl = params();
            const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?${paramUrl}`;
            const response = await fetch(url);
            const {data} = await response.json();
            return onSuccess(data);
        } catch(e) {
            return onError(e);
        }
    }   
}