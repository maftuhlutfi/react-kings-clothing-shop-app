import React from 'react';
import './CollectionItem.scss';
import CustomButton from './CustomButton';
import { connect } from 'react-redux';
import { addItem } from '../redux/actions/cartActions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/selectors/userSelector';
import { NavLink } from 'react-router-dom'


function CollectionItem({item, addItem, currentUser}) {
	const { imageUrl, name, price } = item;

	return (
		<div className="collection-item">
			<div
				className='image'
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			/>
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>${price}</span>
			</div>
			{
				currentUser ? 
				<CustomButton onClick={() => addItem(item)} inverted>ADD TO CART</CustomButton>
				:
				<CustomButton inverted><NavLink to="/login"> ADD TO CART </NavLink></CustomButton> 
			}
			
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);