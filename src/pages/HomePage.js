import React from 'react';
import './HomePage.scss';
import MenuList from '../components/MenuList';
import MenuItem from '../components/MenuItem';
import { sections } from './sectionsData';

class HomePage extends React.Component {
	constructor() {
		super();

		this.state = {
			sections
		}
	}
	render() {
		const { sections } = this.state;

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
}

export default HomePage;