import React from 'react';
import { Route } from 'react-router-dom';

import './ShopPage.scss';

import { connect } from 'react-redux';
import { fetchCollectionsAsync } from '../redux/actions';

import CollectionOverviewContainer from '../components/CollectionOverviewContainer';
import CollectionPageContainer from '../components/CollectionPageContainer';

class ShopPage extends React.Component {
	componentDidMount() {
		const { fetchCollectionsAsync } = this.props;
		fetchCollectionsAsync();
	}

	render() {
		const { match } = this.props;
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

}

const mapDispatchToProps = dispatch => ({
	fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);