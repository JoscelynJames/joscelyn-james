import React from 'react';
import menu from '../assets/imgs/menu.svg';

class Dropdown extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isClosed: true,
		};

	}

	openNav() {
		this.setState({ isClosed: !this.state.isClosed })
		var dropdown = document.getElementsByClassName("dropdown")
		var name = document.getElementsByClassName("name")
		var hamburger = document.getElementsByClassName("hamburger")
		console.log(dropdown)
		if (this.state.isClosed) {
			dropdown[0].classList.remove("hidden")
			name[0].classList.add("small")
			hamburger[0].classList.add("small")
		} else {
			dropdown[0].classList.add("hidden")
		}

	}

	render() {
		return (
			<div>
				<div className="dropdown-container">
					<img onClick={() => this.openNav()} src={menu} alt="" className="hamburger" />
					<h1 className="name" >Joscelyn James</h1>
					<Menu />
				</div>
			</div>
		)
	}
}

function Menu() {
	return (
		<div className="dropdown hidden">
			<div className="option" >About Me</div>
			<div className="option" >Connect</div>
			<div className="option" >Projects</div>
		</div>
	)
}

export default Dropdown;