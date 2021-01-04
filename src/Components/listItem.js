import React, { useState, useRef } from 'react';

function ListItem(props){
	const id_question = 'quest-' + props.questId;

	const [enterAnswer, setAnswer] = useState('');
	const rightAnswer = useRef(null);
	
	const checkAnswer = (val) => {
		let answer = rightAnswer.current.innerText;
		if (answer.includes(val, 0)){
			console.log(true);
		}
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
		<p ref={ rightAnswer }>{ props.answer }</p>
	</div>
}

export default ListItem;