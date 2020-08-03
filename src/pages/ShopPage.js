import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import './ShopPage.scss';

import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../redux/actions/dataActions';

import CollectionOverviewContainer from '../components/CollectionOverviewContainer';
import CollectionPageContainer from '../components/CollectionPageContainer';

const ShopPage = ({ fetchCollectionsStart, match }) => {
	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart])

	return (
		<div className="shop-page">
			<Route
				exact
				path={`${match.path}`}
				component={CollectionOverviewContainer}
			/>
			<Route
				path={`${match.path}/:collectionId`}
				component={CollectionPageContainer}
			/>
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);