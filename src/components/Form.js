import React, { Component } from 'react';
4
class Form extends Component {
	render() {
		return (
			<div className="form-container">
			Get in Touch
				<div>
					<input type="text" placeholder="Your Email"/>
				</div>
				<div>
					<textarea cols="50" rows="10" placeholder="What's up?"></textarea>
				</div>
				<button>send</button>
			</div>
		);
	}
}

export default Form;