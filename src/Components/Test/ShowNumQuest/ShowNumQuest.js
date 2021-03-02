import React, { Component } from 'react';
import style from './showNumQuest.module.css';

class ShowNumQuest extends Component{
	render(){
		const questions = this.props.quest;

		if (questions.[questions.length - 1] === 'commonArray'){
			questions.pop();
		}
		console.log(questions);
		console.log(this.props.startQuest);
		const listQuest = questions.map((question, index) => 
			(index >= this.props.startQuest && index < this.props.startQuest + 20) ? 
			<li 
				key={ question.id_quest.startQuest } 
				className={`
					${ style.numQuest }
					${ (question.hasOwnProperty('status_answer')) ? (question.status_answer) ? style.rightAnswer : style.mistakeAnswer : style.white }`}>
					{ question.id_quest.replace(/[a-zA-Z]+_/g, '') }
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