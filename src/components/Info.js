import React, { Component } from 'react';

class Info extends Component {
	render() {
		return (
			<div className={`card-info ${this.props.show}`}>
				<h3>{this.props.name}</h3>
				<p>{this.props.desc}</p>
				<p>{this.props.tech}</p>
				<div>
					{this.props.github ? <a href={this.props.github}>GitHub</a> : null}
				</div>
				<div>
					{this.props.deployed ? <a href={this.props.deployed}>Deployed Site</a> : null}
				</div>
			</div>
		)
	}
}

export default Info;