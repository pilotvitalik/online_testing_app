import React, { Component } from 'react';
import style from './showNumQuest.module.css';

class ShowNumQuest extends Component{

	render(){
		const questions = this.props.quest;
		const listQuest = questions.map((question, index) => 
			index >= this.props.startQuest ? 
			<li 
				key={ question.id_quest } 
				className={`
					${ style.numQuest }
					${ (question.hasOwnProperty('status_answer')) ? (question.status_answer) ? style.rightAnswer : style.mistakeAnswer : style.white }`}>
					{ question.id_quest }
			</li>
			: ''
		);
		return(
			<ul>
				{ listQuest }
			</ul>
		);
	}
}

export default ShowNumQuest;