import React from 'react';
import {Route} from 'react-router-dom';

import './ShopPage.scss';
import CollectionOverview from '../components/CollectionOverview';
import CollectionPage from './CollectionPage';

import { firestore, convertCollectionsSnapshotToMap } from '../firebase/firebase.utils';

import {connect} from 'react-redux';
import { updateCollections } from '../redux/actions';

class ShopPage extends React.Component {
	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionsRef = firestore.collection('collections');

		collectionsRef.onSnapshot(async snapshot => {
			const convertedCollection = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(convertedCollection);
		})
	}

	render() {
		const { match } = this.props;
		return (
			<div className="shop-page">
				<Route exact path={`${match.path}`} component={CollectionOverview} />
				<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
			</div>
		);
	}
	
}

const mapDispatchToProps = dispatch => ({
	updateCollections: collections => dispatch(updateCollections(collections))
})

export default connect(null, mapDispatchToProps)(ShopPage);