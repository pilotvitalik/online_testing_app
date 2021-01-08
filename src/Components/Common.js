import { useState } from 'react';
import ListItem from './ListItem.js';
import style from './common.module.css';

function Common(props){
	let displayEl;
	const quest = props.questions;
	const [startInd, setStartInd] = useState(0);

	const changeQuest = (val) => {
		setStartInd(val);
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
			changeItem={ changeQuest }/>
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

export default Common;