import ItemAnswer from './ItemAnswer.js';
import React, { useState } from 'react';
import style from './listItem.module.css';

function ListItem(props){
	let mes;
	const answers = props.answers;

	const [answerRight, isAnswerRight] = useState('');
	const [questNumber, setQuestNum] = useState('');
	const [num, setNum] = useState();
	const [inOrder, setInOrder] = useState('0');
	const [inMix, setInMix] = useState('');
	const [questType, setQuestType] = useState(0);

	const checkAnswer = () => {
		if (num === props.rightAns){
			isAnswerRight(true);
			return false;
		}
		isAnswerRight(false);
	}

	const nextQuest = () => {
		const nextInd = props.dataInd + 1;
		props.changeItem(nextInd);
	}

	const changeNum = (event) => {
		setQuestNum(+event.target.value);
	}

	const updateQuest = (event) => {
		if (event.keyCode === 13){
			props.changeItem(questNumber - 1);
		}
	}

	const checkVal = (event) => {
		setNum(+event.target.value);
		checkAnswer();
	}

	const changeTypeOrder = (event) => {
		setInOrder(+event.target.value);
		console.log('setInOrder');
		console.log(inOrder);
	}

	const changeTypeMix = (event) => {
		setInMix(+event.target.value);
		console.log('setInMix');
		console.log(inMix);
	}

	switch(answerRight){
		case true:
			mes = <React.Fragment><p className={ style.trueAnswer }>Верно</p><button type='button' onClick={ nextQuest }>Следующий вопрос</button></React.Fragment>;
			break;
		case false:
			mes = <React.Fragment><p>Не верно</p><button type='button' onClick={ nextQuest }>Следующий вопрос</button></React.Fragment>;
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
		<div>
			<label htmlFor='setNumQuest'>
				Введите номер вопроса: 
			</label>
			<input
				id='setNumQuest'
				name='questNumber'
				type='text'
				value={ questNumber }
				onChange={ changeNum }
				onKeyDown={ updateQuest }/>
		</div>
		<div>
			<p>Выберите поярдок вопросов:</p>
			<form>
				<div>
					<input 
						id='typeQueue-1'
						type='radio'
						value='0'
						name='queueQuest'
						defaultChecked={ inOrder !== '' }
						onClick={ changeTypeOrder }/>
					<label 
						htmlFor='typeQueue-1'>
						по порядку
					</label>
				</div>
				<div>
					<input 
						id='typeQueue-2'
						type='radio'
						value='1'
						name='queueQuest'
						defaultChecked={ inMix !== '' }
						onClick={ changeTypeMix }/>
					<label 
						htmlFor='typeQueue-2'>
						в перемешку
					</label>
				</div>
			</form>
		</div>
		<h3>Вопрос № { props.idQuest }. { props.question }</h3>
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