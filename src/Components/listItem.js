import ItemAnswer from './ItemAnswer.js';
import React, { useState } from 'react';

function ListItem(props){
	const answers = props.answers;

	const [answerRight, isAnswerRight] = useState('');

	const testFunc = (val) => {
		console.log(val)
		if (val === props.rightAns){
			isAnswerRight(true);
			return false;
		}
		isAnswerRight(false);
	}

	let mes;
	switch(answerRight){
		case true:
			mes = <React.Fragment><p>Верно</p><button type='button'>Следующий вопрос</button></React.Fragment>;
			break;
		case false:
			mes = <React.Fragment><p>Не верно</p><button type='button'>Следующий вопрос</button></React.Fragment>;
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
			func={ testFunc }/>
	);

	return <div>
		<form>
			{ listAnswer }
			{ mes }
		</form>
	</div>
}

export default ListItem;