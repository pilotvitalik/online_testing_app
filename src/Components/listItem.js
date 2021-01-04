import React, { useState } from 'react';

function ListItem(props){
	const [enterAnswer, setAnswer] = useState('');

	const id_question = 'quest-' + props.questId;
	return <div>
		<label htmlFor={ id_question }>{ props.title }</label>
		<input 
			type='text'
			id={ id_question }
			value={ enterAnswer }
			onChange={(event) => setAnswer(event.target.value)}
		/>
		<p>{ props.answer }</p>
	</div>
}

export default ListItem;