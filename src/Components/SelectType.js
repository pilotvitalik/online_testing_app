import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class SelectType extends Component{
	constructor(props){
		super(props);
		this.tableContents = this.props.tableContents;
		this.setParam = this.setParam.bind(this);
	}

	setParam(){
		document.location.href = '/param';
	}

	render() {
		console.log(this.tableContents);
		return (
			<button
				type='button'
				onClick={ this.setParam }>
				Выбрать параметры
			</button>
		);
	}
}

export default SelectType;