import React from 'react';
import './CollectionPreview.scss';
import CollectionItem from '../components/CollectionItem';

import {Link} from 'react-router-dom';

function CollectionPreview({ title, items }) {
	return (
		<div className='collection-preview'>
			<div className='preview-header'>
				<h1 className='title'>{title}</h1>
				<Link className='more' to={`/shop/${title.toLowerCase()}`}>Show all</Link>
			</div>
			<div className='preview'>
				{items
					.filter((item, index) => index < 4)
					.map(item => <CollectionItem key={item.id} item={item} />)
				}
			</div>
		</div>
	);
}

export default CollectionPreview;