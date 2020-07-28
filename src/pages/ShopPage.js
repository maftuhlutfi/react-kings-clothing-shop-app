import React from 'react';
import {Route} from 'react-router-dom';

import './ShopPage.scss';
import CollectionOverview from '../components/CollectionOverview';
import CollectionPage from './CollectionPage';

import { firestore, convertCollectionsSnapshotToMap } from '../firebase/firebase.utils';

import {connect} from 'react-redux';
import { updateCollections } from '../redux/actions';

import withSpinner from '../components/withSpinner';

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage)

class ShopPage extends React.Component {
	state = {
		isLoading: true
	}

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionsRef = firestore.collection('collections');

		collectionsRef.onSnapshot(async snapshot => {
			const convertedCollection = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(convertedCollection);
			this.setState({ isLoading: false });
		})
	}

	render() {
		const { match } = this.props;
		const { isLoading } = this.state;
		return (
			<div className="shop-page">
				<Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />} />
				<Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />} />
			</div>
		);
	}
	
}

const mapDispatchToProps = dispatch => ({
	updateCollections: collections => dispatch(updateCollections(collections))
})

export default connect(null, mapDispatchToProps)(ShopPage);