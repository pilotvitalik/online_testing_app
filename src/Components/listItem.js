import ItemAnswer from './ItemAnswer.js';
import React, { useState } from 'react';

function ListItem(props){
	let mes;
	const answers = props.answers;

	const [answerRight, isAnswerRight] = useState('');

	const checkAnswer = (val) => {
		if (val === props.rightAns){
			isAnswerRight(true);
			return false;
		}
		isAnswerRight(false);
	}

	const nextQuest = () => {
		const nextInd = props.dataInd + 1;
		console.log(nextInd);
		props.changeItem(nextInd);
	}

	switch(answerRight){
		case true:
			mes = <React.Fragment><p>Верно</p><button type='button' onClick={ nextQuest }>Следующий вопрос</button></React.Fragment>;
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
			func={ checkAnswer }/>
	);

	return <div data-ind={ props.dataInd }>
		<form>
			{ listAnswer }
			{ mes }
		</form>
	</div>
}

export default ListItem;