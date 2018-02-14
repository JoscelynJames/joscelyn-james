import React from 'react';

export default function Card(props) {
	return (
		<div className={props.class + " card-container"} >
			<img className="card-image" src={props.img} alt={props.name}/>
		</div>
	)
}
