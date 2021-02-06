import React, { useState, useEffect } from 'react';

function ItemAnswer(props){
	const nameAnsw = `quest-${ props.idQuest }`;

	const [activeVal, setActiveVal] = useState(props.idAnsw);
	const [isChecked, setIsCheked] = useState(false);

	const checkVal = (event) => {
		setActiveVal(+event.target.value);
		props.func(activeVal);
	}

	useEffect(() => {
		(props.keyAnswer !== '' && props.keyAnswer === activeVal) ? setIsCheked(true) : setIsCheked(false);
	}, [activeVal, props.keyAnswer, setIsCheked]);

	return(
		<div>
			<input
				name={ nameAnsw }
				type='radio'
				value={ activeVal }
				checked={ isChecked }
				onChange={ checkVal }/>
			<label>{ props.idAnsw }. { props.val }</label>
		</div>
	);
}

export default ItemAnswer;