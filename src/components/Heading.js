import React from 'react';
import Geo from './Geo';
class Heading extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			adjective: ['developer', 'creator', 'learner'],
			currentIndex: 0,
			scroll: window.scrollY
		};

		this.updateAdjective = this.updateAdjective.bind(this)
	}

	updateAdjective() {
		setInterval(() => {
			if (this.state.currentIndex < this.state.adjective.length -1) {
				this.setState({ currentIndex: this.state.currentIndex + 1 })
			} else {
				this.setState({ currentIndex: 0 })
			}

			return this.state.adjective[this.state.currentIndex]}, 3000)
 }

  componentWillMount() {
	  this.updateAdjective()
  }

	render() {
		return (
			<div>
				<SplashNav />
				<div>
					<div className="heading-container">
						<Geo />
					</div>
					<h3 className="heading">I'm a {this.state.adjective[this.state.currentIndex]}</h3>
				</div>
			</div>
		)
	}
}

function SplashNav() {
	return (
		<div className="nav-container">
			<h1 className="name" >Joscelyn James</h1>
				<div className="s-nav">
					<div className="s-option" >about me </div>
					<div className="s-option" >connect </div>
					<div className="s-option" >projects</div>
				</div>
		</div>
	)
}

export default Heading; 