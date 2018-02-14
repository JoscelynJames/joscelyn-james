import React, { Component } from 'react';
import Card from './Card';
import Info from './Info';
import projects from '../assets/projects';

class Projects extends Component {

	handleMouseEnter(project) {
		var clicked = document.getElementsByClassName(project + '-container')
		clicked[0].children[0].classList.remove('hidden')
		clicked[0].children[1].classList.add('opacity')

	}

	handleMouseLeave(project) {
		var clicked = document.getElementsByClassName(project + '-container')
		clicked[0].children[0].classList.add('hidden')
		clicked[0].children[1].classList.remove('opacity')
	}

	render() {
		return (
			<div 
				className="projects-container"
			>
				<h3>My Projects</h3>
				{projects.map((project, i) => {
					return (
						<div
							onMouseEnter={() => this.handleMouseEnter(project.className)}
							onMouseLeave={() => this.handleMouseLeave(project.className)} 
							className={`${project.className}-container`}
							key={project.name}>
							<Info
								show="hidden"
								name={project.name}
								desc={project.desc}
								tech={project.tech}
								github={project.github}
								deployed={project.deployed}
							/>
							<Card 
								class={project.className}
								key={i}
								img={project.img}
							/>
						</div>
					);
				}) }
			</div>
		);
	}
}

export default Projects;