import React, {Component} from 'react';
import ListContent from './ListContent.js';

class SelectType extends Component{
	constructor(props){
		super(props);
		this.state = {
			param: 'node',
		};
		this.setParam = this.setParam.bind(this);
	}

	setParam(){
		document.location.href = `/param/${ this.state.param }`;
	}

	defUrl(urlPage){
		this.state.param = urlPage
	}

	render() {
		console.log(this.props.tableContents);
		const table = this.props.tableContents;
		const showTable = table.map((item) => 
			<ListContent key={ item.id_test } val={ item.test_name } url={ item.url_param } idKey={ item.id_test } func={ this.defUrl.bind(this) }/>
		);
		return (
			<React.Fragment>
				{ showTable }
				<button
					type='button'
					onClick={ this.setParam }>
					Выбрать параметры
				</button>
			</React.Fragment>
		);
	}
}

export default SelectType;