import React from 'react';
import './ShopPage.scss';
import shopData from './shopData';
import CollectionPreview from '../components/CollectionPreview';

class ShopPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: shopData
		}
	}

	render() {
		const { collections } = this.state;

		return (
			<div className="shop-page">
				{collections.map(({id, ...otherProps}) => <CollectionPreview key={id} {...otherProps} />)}
			</div>
		);
	}
}

export default ShopPage;