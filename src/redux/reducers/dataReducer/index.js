import sections from './sectionsData';
import collections from './shopData';

const INITIAL_STATE = {
	sections,
	collections
}

const dataReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default: return state;
	}
}

export default dataReducer;