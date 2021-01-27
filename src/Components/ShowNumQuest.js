import React, { Component } from 'react';
import style from './showNumQuest.module.css';

class ShowNumQuest extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const questions = this.props.quest;
		const listQuest = questions.map((question) => 
			<li key={ question.id_quest } className={ style.numQuest }>{ question.id_quest }</li>
		);
		return(
			<ul>
				{ listQuest }
			</ul>
		);
	}
}

export default ShowNumQuest;