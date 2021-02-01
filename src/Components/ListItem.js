import ItemAnswer from './ItemAnswer.js';
import React, { useState, useEffect, useCallback } from 'react';
import style from './listItem.module.css';

function ListItem(props){
	let mes;
	const answers = props.answers;

	const [answerRight, isAnswerRight] = useState('');
	const [answerText, setAnswerText ] = useState('');
	const [keyboard, isKeyboard] = useState(false);

	const [num, setNum] = useState();

	const checkAnswer = useCallback((event) => {
		if (num === props.rightAns){
			isAnswerRight(true);
			return false;
		}
		answers.forEach(item => {
			if (item.id === props.rightAns){
				setAnswerText(item.answer);
			}
		});
		isAnswerRight(false);
	}, [answers, num, props.rightAns])

	const nextQuest = () => {
		const nextInd = props.dataInd + 1;
		props.changeItem(nextInd);
		props.statusAnswer(answerRight, props.dataInd)
	}

	const checkVal = (event) => {
		setNum(+event.target.value);
		checkAnswer();
	}

	const defineAnswer = (event) => {
		if (49 <= event.keyCode <= 52){
			isKeyboard(true);
			setNum(+event.key);
		}	
		if (event.keyCode === 13){
			nextQuest();
		}
	}

	useEffect(() => {
		if (!keyboard) document.onkeydown = defineAnswer;
	});

	useEffect(() => {
		if (!isNaN(num) && 1 <= num <= 4 && num !== 0){
			checkAnswer();
		}
	}, [num, checkAnswer])

	const rightAnswer = `Правильный ответ: ${ answerText }`;

	switch(answerRight){
		case true:
			mes = <React.Fragment><p className={ style.trueAnswer }>Верно</p><button type='button' onClick={ nextQuest }>Следующий вопрос</button></React.Fragment>;
			break;
		case false:
			mes = <React.Fragment><p>Не верно</p><p>{ rightAnswer }</p><button type='button' onClick={ nextQuest }>Следующий вопрос</button></React.Fragment>;
			break;
		default:
			mes = '';
			break;
	}

	const listAnswer = answers.map((answer) => 
		<ItemAnswer
			key={ answer.id }
			val={ answer.answer }
			idQuest={ props.idQuest }
			idAnsw={ answer.id }
			func={ setNum }
			checkAnsw={ checkVal }/>
	);

	return <div data-ind={ props.dataInd }>
		<h2>{ props.titleQuest }</h2>
		<h3>Вопрос № { props.idQuest.replace(/[a-zA-Z]+_/g, '') }. { props.question }</h3>
		<form>
			{ listAnswer }
		</form>
		<button
			type='button'
			onClick={ checkAnswer }>
			Проверить
		</button>
		{ mes }
	</div>
}

export default ListItem;