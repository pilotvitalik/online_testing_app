import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SetParam(props) {
	const [questNumber, setQuestNum] = useState('');
	const [inOrder, setInOrder] = useState('0');
	const [inMix, setInMix] = useState('');

	const changeNum = (event) => {
		setQuestNum(+event.target.value);
	}

	const updateQuest = () => {
		(questNumber !== '') ? props.changeItem(questNumber - 1) : props.changeType();
	}

	const changeTypeOrder = (event) => {
		setInOrder(+event.target.value);
	}

	const changeTypeMix = (event) => {
		setInMix(+event.target.value);
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
			<div>
				<p>Выберите порядок вопросов:</p>
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
			<button
				type='button'
				onClick={ updateQuest }>
				<Link to='/test'>К тестам</Link>
			</button>
		</React.Fragment>
	);
}

export default SetParam;