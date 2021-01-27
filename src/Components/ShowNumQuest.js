import React, { Component } from 'react';
import style from './showNumQuest.module.css';

class ShowNumQuest extends Component{

	render(){
		console.log(this.props.startInd);
		const doneQuest = style.doneQuest;
		const questions = this.props.quest;
		const listQuest = questions.map((question, index) => 
			index >= this.props.startQuest ? 
			<li 
				key={ question.id_quest } 
				className={`
					${ style.numQuest }
					${ (index === this.props.startInd) ? doneQuest : '' }`}>
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