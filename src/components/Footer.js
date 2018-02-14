import React, { Component } from 'react';
import Form from './Form';

class Footer extends Component {
	render() {
		return (
			<div className="footer-container">
				<div className="contents">
					<div className="info-container">
						<a href="">Resume</a>
						<a href="">GitHub</a>
						<a href="">Twitter</a>
						<a href="">LinkedIn</a>
						<a href="">CodePen</a>
					</div>
					<Form />
				</div>
			</div>
		);
	}
}

export default Footer;