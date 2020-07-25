import React from 'react';
import {Route} from 'react-router-dom';

import './ShopPage.scss';
import CollectionOverview from '../components/CollectionOverview';
import CollectionPage from './CollectionPage';

function ShopPage({match}) {
	return (
		<div className="shop-page">
			<Route exact path={`${match.path}`} component={CollectionOverview} />
			<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
		</div>
	);
}

export default ShopPage;