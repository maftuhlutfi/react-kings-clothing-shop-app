import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';

const selectData = state => state.data;

export const selectDataCollections = createSelector(
	[selectData],
	data => data.collections
)

export const selectDataSections = createSelector(
	[selectData],
	data => data.sections
)

export const selectDataForPreview = createSelector(
	[selectDataCollections],
	collections => collections ? Object.keys(collections).map(key => collections[key]) : null
)

export const selectCollection = memoize((collectionId) =>
	createSelector(
		[selectDataCollections],
		(collections) => collections ? collections[collectionId] : null
  )
);

export const selectIsLoading = createSelector(
	[selectData],
	data => data.isLoading
)

export const selectIsCollectionsLoaded = createSelector(
	[selectDataCollections],
	collections => !!!collections
)