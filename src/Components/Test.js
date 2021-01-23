import { useState } from 'react';
import { Link } from 'react-router-dom';
import ListItem from './ListItem.js';
import style from './test.module.css';

function Test(props){
	let displayEl;
	const quest = props.questions;

	const changeType = () => {
		for (let i = quest.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
		    [quest[i], quest[j]] = [quest[j], quest[i]];
		}
	}

	const listItems = quest.map((item, index) => 
		index === props.startInd ?
		<ListItem 
			dataInd={ index }
			question={item.name_quest}
			key={ item.id_quest }
			title={ item.name_quest }
			answers={ item.answers }
			rightAns={ item.rightAnswer }
			idQuest={ item.id_quest }
			changeItem={ props.changeItem }
			changeType={ changeType }/>
		: ''
	);

	const testDone = <h2>Тест пройден</h2>;

	props.startInd !== quest.length ? displayEl = listItems : displayEl = testDone;

	return (
		<div className={ style.common }>
			{ displayEl }
			<button
				type='button'>
				<Link to='/'>Главная</Link>
			</button>
		</div>
	);
}

export default Test;