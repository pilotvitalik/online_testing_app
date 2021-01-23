import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SetParam(props) {
	const [questNumber, setQuestNum] = useState('');

	const changeNum = (event) => {
		setQuestNum(+event.target.value);
	}

	const updateQuest = () => {
		props.changeItem(questNumber - 1);
	}

	return (
		<React.Fragment>
			<div>
				<label htmlFor='setNumQuest'>
					Введите номер вопроса: 
				</label>
				<input
					id='setNumQuest'
					name='questNumber'
					type='text'
					value={ questNumber }
					onChange={ changeNum }/>
			</div>
			<button
				type='button'
				onClick={ updateQuest }>
				<Link to='/test'>К тестам</Link>
			</button>
		</React.Fragment>
	);
}

export default SetParam;