import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ListContent from './ListContent.js';

class SelectType extends Component{
	constructor(props){
		super(props);
		this.state = {
			param: '/param/node',
			testPage: 'node',
		};
	}

	defUrl(urlPage){
		this.setState(() => {
			return {
				param: `/param/${ urlPage }`,
				testPage: urlPage,
			};
		});
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
				<Link to={{
					pathname: this.state.param,
					state: {test_page: this.state.testPage},
				}}>
					Выбрать параметры
				</Link>
			</React.Fragment>
		);
	}
}

export default SelectType;