import React from 'react';
import CollectionPreview from '../components/CollectionPreview';

import './CollectionOverview.scss';

import {connect} from 'react-redux';
import {selectDataCollections} from '../redux/selectors/dataSelector';
import {createStructuredSelector} from 'reselect';

function CollectionOverview({collections}) {
	return (
		<div className="collection-overview">
			{collections.map(({id, ...otherProps}) => <CollectionPreview key={id} {...otherProps} />)}
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	collections: selectDataCollections
})

export default connect(mapStateToProps)(CollectionOverview);