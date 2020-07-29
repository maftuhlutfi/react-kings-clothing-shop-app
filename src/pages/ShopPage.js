import React from 'react';
import { Route } from 'react-router-dom';

import './ShopPage.scss';
import CollectionOverview from '../components/CollectionOverview';
import CollectionPage from './CollectionPage';

import { connect } from 'react-redux';
import { fetchCollectionsAsync } from '../redux/actions';

import { selectIsLoading, selectIsCollectionsLoaded } from '../redux/selectors/dataSelector';

import withSpinner from '../components/withSpinner';

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage)

class ShopPage extends React.Component {
	componentDidMount() {
		const { fetchCollectionsAsync } = this.props;
		fetchCollectionsAsync();
	}

	render() {
		const { match, isLoading, isCollectionsLoaded } = this.props;
		console.log(isLoading);
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={(props) => 
						<CollectionOverviewWithSpinner 
							isLoading={isLoading} 
							{...props} 
						/>}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => 
						<CollectionPageWithSpinner 
							isLoading={isCollectionsLoaded} 
							{...props} 
						/>}
				/>
			</div>
		);
	}

}

const mapDispatchToProps = dispatch => ({
	fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
})

const mapStateToProps = state => ({
	isLoading: selectIsLoading(state),
	isCollectionsLoaded: selectIsCollectionsLoaded(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);