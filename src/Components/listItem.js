import React, { useState, useRef } from 'react';
import style from './listItem.module.css';

function ListItem(props){
	const id_question = 'quest-' + props.questId;

	const [enterAnswer, setAnswer] = useState('');
	const [hideAnswer, setDisplay] = useState(style.hiddenAnswer);
	const rightAnswer = useRef(null);
	
	const checkAnswer = (val) => {
		let answer = rightAnswer.current.innerText;
		setDisplay('');
	}

	const getAnswer = (event) => {
		let answer = '';
		if (event.keyCode === 13){
			answer = event.target.value;
			checkAnswer(answer);
		}
	}

	return <div>
		<label htmlFor={ id_question }>{ props.title }</label>
		<textarea 
			id={ id_question }
			value={ enterAnswer }
			onChange={(event) => setAnswer(event.target.value)}
			onKeyDown={getAnswer}
		></textarea>
		<p ref={ rightAnswer } className={ hideAnswer }>{ props.answer }</p>
	</div>
}

export default ListItem;