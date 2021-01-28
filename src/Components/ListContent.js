import { useState } from 'react';

function ListContent(props){
	const testType = props.url;

	const [url, setUrl] = useState(props.url);

	const defineUrl = (event) => {
		setUrl(event.target.value);
		props.func(url);
	}

	return (
		<div>
			<input
				type='radio'
				id={ props.url + '-' + props.idKey }
				name='typeTest'
				value={ props.url }
				disabled={ props.globalMix }
				defaultChecked={ testType === 'node' }
				onClick={ defineUrl }/>
			<label 
				htmlFor={ props.url + '-' + props.idKey }>
				{ props.val }
			</label>
		</div>
	);
}

export default ListContent;