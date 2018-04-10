import {cloneDeep, forEach} from 'lodash';

const initial = {
	data: {
		allObject: [],
		allIds: [],
	},
	count: 0,
	limit: 0,
	offset: 0,
	total: 0,
	pageCount: 0
};

const getAll = (state, {payload}) => {	
	const newState = cloneDeep(initial);
	forEach(payload.results, (item) => {
		if (newState.data.allIds.indexOf(item.id) === -1) {
			newState.data.allObject.push(item);
			newState.data.allIds.push(item.id);
		}
	});
	newState.count = payload.count;
	newState.limit = payload.limit;
	newState.offset = payload.offset;
	newState.total = payload.total;
	newState.pageCount = Math.ceil(payload.total / payload.limit);
	return newState;
};

export const comics = (state = initial, action) => {
	switch(action.type) {
		case 'COMICS_SUCCESS': 
			return getAll(state, action);
		default:
			return state;
	}
}