import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListContent from "./ListContent/ListContent.js";

class SelectType extends Component {
	constructor(props) {
		super(props);
		this.state = {
			param: "/param/node",
			testPage: "node",
			isGlobalMix: false,
			textBtn: "Выбрать параметры",
		};
		this.selectMix = this.selectMix.bind(this);
		this.setAuth = this.setAuth.bind(this);
	}

	defUrl(urlPage) {
		this.setState(() => {
			return {
				param: `/param/${urlPage}`,
				testPage: urlPage,
			};
		});
	}

	selectMix() {
		if (!this.state.isGlobalMix) {
			this.setState(() => {
				return {
					isGlobalMix: true,
					param: "/test/common_test",
					testPage: "common",
					textBtn: "К тесту",
				};
			});
			this.props.changeGlobalMix();
			return false;
		}
		this.setState(() => {
			return {
				isGlobalMix: false,
				textBtn: "Выбрать параметры",
			};
		});
	}

	setAuth() {
		this.props.isAuth();
	}

	render() {
		const table = this.props.tableContents;
		const showTable = table.map((item) => (
			<ListContent
				key={item.id_test}
				val={item.test_name}
				url={item.url_param}
				idKey={item.id_test}
				func={this.defUrl.bind(this)}
				globalMix={this.state.isGlobalMix}
			/>
		));
		return (
			<React.Fragment>
				{showTable}
				<hr />
				<input
					id="selGlobalMix"
					type="checkbox"
					value="1"
					name="globalMix"
					checked={this.state.isGlobalMix}
					onChange={this.selectMix}
				/>
				<label htmlFor="selGlobalMix">
					объеденить тесты и перемешать вопросы
				</label>
				<hr />
				<Link
					to={{
						pathname: this.state.param,
						state: { test_page: this.state.testPage },
					}}
					onClick={this.setAuth}
				>
					{this.state.textBtn}
				</Link>
			</React.Fragment>
		);
	}
}

export default SelectType;
