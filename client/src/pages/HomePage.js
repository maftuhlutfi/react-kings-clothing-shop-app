import React from 'react';
import './HomePage.scss';
import MenuList from '../components/MenuList';
import MenuItem from '../components/MenuItem';

import {connect} from 'react-redux';
import {selectDataSections} from '../redux/selectors/dataSelector';
import {createStructuredSelector} from 'reselect';

function HomePage({sections}) {
	return (
		<div className="homepage">
			<MenuList>
				{sections.map(({ id, title, imageUrl, linkUrl, size }) =>
					<MenuItem
						key={id}
						title={title}
						imageUrl={imageUrl}
						linkUrl={linkUrl}
						size={size}
					/>
				)}
			</MenuList>
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	sections: selectDataSections
})

export default connect(mapStateToProps)(HomePage);