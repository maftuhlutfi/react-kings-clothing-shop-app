import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

import './ShopPage.scss';

import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../redux/actions/dataActions';

import Spinner from '../components/Spinner';

const CollectionOverviewContainer = lazy(() => import('../components/CollectionOverviewContainer'));
const CollectionPageContainer = lazy(() => import('../components/CollectionPageContainer'));

const ShopPage = ({ fetchCollectionsStart, match }) => {
	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart])

	return (
		<div className="shop-page">
			<Suspense fallback={<Spinner />}>
				<Route
					exact
					path={`${match.path}`}
					component={CollectionOverviewContainer}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPageContainer}
				/>
			</Suspense>
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);