import {LIMIT} from '../config';
import {params} from '../utils';
export const getComics = (id, offSet) => {
	return async dispatch => {
        function onSuccess(success) {
            dispatch({
                type: 'COMICS_SUCCESS',
                payload: success
            });
            return success;
        }
        function onError(error) {
            dispatch({
                type: 'COMICS_ERROR',
                error
            });
            return error;
        }
        try {
            const paramUrl = params();
            const url = offSet 
            ? `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?&offset=${offSet}&limit=${LIMIT}&${paramUrl}`
            : `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?limit=${LIMIT}&${paramUrl}`
            const response = await fetch(url);
            const {data} = await response.json();
        	return onSuccess(data);
        } catch(e) {
            return onError(e);
        }
    }
}