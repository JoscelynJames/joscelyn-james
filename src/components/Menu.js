import React from 'react';
import next from '../assets/imgs/next.svg';

class Menu extends React.Component {
	render() {
		return (
			<div>
				<img className="menu" src={next} alt=" " />
			</div>
		)
	}
}

export default Menu;