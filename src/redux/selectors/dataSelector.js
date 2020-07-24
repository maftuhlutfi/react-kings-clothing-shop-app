import {createSelector} from 'reselect';

const selectData = state => state.data;

export const selectDataCollections = createSelector(
	[selectData],
	data => data.collections
)

export const selectDataSections = createSelector(
	[selectData],
	data => data.sections
)