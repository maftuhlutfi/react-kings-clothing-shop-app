import CollectionPage from '../pages/CollectionPage';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { selectIsCollectionsLoaded } from '../redux/selectors/dataSelector';

import withSpinner from '../components/withSpinner';

const mapStateToProps = state => ({
	isLoading: !selectIsCollectionsLoaded(state)
})

export default compose(
	connect(mapStateToProps),
	withSpinner
)(CollectionPage);