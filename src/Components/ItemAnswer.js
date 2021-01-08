import React, { useState } from 'react';

function ItemAnswer(props){
	const nameAnsw = `quest-${ props.idQuest }`;

	const [activeVal, setActiveVal] = useState(props.idAnsw);

	const checkVal = (event) => {
		setActiveVal(event.target.value);
		props.func(+activeVal);
	}

	return(
		<div>
			<input
				name={ nameAnsw }
				type='radio'
				value={ activeVal }
				onClick={ checkVal }/>
			<label>{ props.val }</label>
		</div>
	);
}

export default ItemAnswer;