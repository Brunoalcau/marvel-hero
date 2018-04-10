import {cloneDeep, forEach} from 'lodash';
import moment from 'moment';
const initial = {
	data: {
		byId: {},
		allIds: [],
		allObject: [],
		object: {}
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
			item.modifiedFormat = moment(item.modified).format('DD/MM/YYYY');
			newState.data.allIds.push(item.id);
			newState.data.byId[item.id] = item;
			newState.data.allObject.push(item);
		}
	});
	newState.count = payload.count;
	newState.limit = payload.limit;
	newState.offset = payload.offset;
	newState.total = payload.total;
	newState.pageCount = Math.ceil(payload.total / payload.limit);
	return newState;
};

const get = (state, {payload}) => {
	const newState = cloneDeep(state);
	newState.data.object = payload.results[0];
	return newState;
};

export const chatacters = (state = initial, action) => {
	switch(action.type) {
		case 'CHARACTERS_SUCCESS': 
			return getAll(state, action);
		case 'CHARACTER_SUCCESS': 
			return get(state, action);
		default:
			return state;
	}
}