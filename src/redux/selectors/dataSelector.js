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
	collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = memoize((collectionId) =>
  createSelector(
    [selectDataCollections],
    (collections) => collections[collectionId]
  )
);