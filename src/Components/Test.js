import { useState } from 'react';
import ListItem from './ListItem.js';
import style from './test.module.css';

function Test(props){
	let displayEl;
	const quest = props.questions;
	const [startInd, setStartInd] = useState(0);
	console.log(quest);

	const changeQuest = (val) => {
		setStartInd(val);
	}

	const changeType = () => {
		for (let i = quest.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
		    [quest[i], quest[j]] = [quest[j], quest[i]];
		}
	}

	const listItems = quest.map((item, index) => 
		index === startInd ?
		<ListItem 
			dataInd={ index }
			question={item.name_quest}
			key={ item.id_quest }
			title={ item.name_quest }
			answers={ item.answers }
			rightAns={ item.rightAnswer }
			idQuest={ item.id_quest }
			changeItem={ changeQuest }
			changeType={ changeType }/>
		: ''
	);

	const testDone = <h2>Тест пройден</h2>;

	startInd !== quest.length ? displayEl = listItems : displayEl = testDone;

	return (
		<div className={ style.common }>
			{ displayEl }
		</div>
	);
}

export default Test;