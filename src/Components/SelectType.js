import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class SelectType extends Component{
	constructor(props){
		super(props);
	}

	render() {
		return (
			<button
				type='button'>
				Выбрать параметры
			</button>
		);
	}
}

export default SelectType;