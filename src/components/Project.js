import React from 'react';
import stock from '../assets/imgs/stock.jpg';
import projects from '../assets/projects';
console.log(projects)
class Project extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			details: false,
		};
	}

	render() {
		return (
			<div className="projects">	
				{projects.map((proj) => {
					return (
					<div className="card-container">
						<img className="card-image" src={proj.img} alt="" />
						<div className="text">
							<h3 className="card-title">Title</h3>
							<p className="card-bio">{proj.bio}</p>
							<p className="card-tech">{proj.tech}</p>
						</div>
					</div>
					)
				})}
			</div>
		)
	}
}

export default Project;