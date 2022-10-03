import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function SetParam(props) {
	const [questNumber, setQuestNum] = useState('');
	const [order, setOrder] = useState('inOrder');
	let params = useParams();
	const url = `/test/${ params.typeTest }`;

	const changeNum = (event) => {
		setQuestNum(+event.target.value);
	}

	const updateQuest = () => {
		props.initQuest(0);
		if (questNumber !== '') {
			props.changeItem(0);
			setQuestNum(questNumber - 1);
			props.changeType(order, params.typeTest, questNumber - 1);
		} else {
			props.changeItem(0);
			setQuestNum(0);
			props.changeType(order, params.typeTest, questNumber);
		}
	}

	const resetVal = () => {
		setOrder('inOrder');
	}

	const changeTypeOrder = () => {
		if (questNumber !== ''){
			alert('Нельзя изменять выбранные занчение при указанном номере билета');
			resetVal();
			return false;
		}
		setOrder('inOrder');
	}

	const changeTypeMix = () => {
		if (questNumber !== ''){
			alert('Нельзя изменять выбранные занчение при указанном номере билета');
			resetVal();
			return false;
		}
		setOrder('inMix');
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
							checked={ order === 'inOrder' }
							onChange={ changeTypeOrder }/>
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
							checked={ order === 'inMix' }
							onChange={ changeTypeMix }/>
						<label
							htmlFor='typeQueue-2'>
							в перемешку
						</label>
					</div>
				</form>
			</div>
				<Link
					to={ url }
					onClick={ updateQuest }>
						К тестам
				</Link>
		</React.Fragment>
	);
}

export default SetParam;
