import React from 'react';

import Button from './Button';

class Card extends React.Component{

	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	};
	
	handleClick(id) {
		console.log(id);
	}

	render() {
		return (
			<div className='c-theme'>
				<img className='c-theme__icon' src={`../../img/${this.props.data.src}`} onContextMenu = { (event) => event.preventDefault() } alt='img' />
				<h2 className='c-theme__title'>{this.props.data.title}</h2>
				<Button className='c-theme__submit' value='Начать' id={this.props.data.key} handleClick={this.handleClick} />
			</div>
		);
	}
}

export default Card;
