import React from 'react';
import CollectionPreview from '../components/CollectionPreview';

import './CollectionOverview.scss';

import {connect} from 'react-redux';
import {selectDataForPreview} from '../redux/selectors/dataSelector';
import {createStructuredSelector} from 'reselect';

function CollectionOverview({collections}) {
	return (
		<div className="collection-overview">
			{collections.map(({id, ...otherProps}) => <CollectionPreview key={id} {...otherProps} />)}
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	collections: selectDataForPreview
})

export default connect(mapStateToProps)(CollectionOverview);