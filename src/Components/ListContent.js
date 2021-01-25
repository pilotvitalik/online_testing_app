function ListContent(props){
	const testType = props.url;

	return (
		<div>
			<input
				type='radio'
				id={ props.url + '-' + props.idKey }
				name='typeTest'
				value={ props.url }
				defaultChecked={ testType === 'node' }/>
			<label 
				htmlFor={ props.url + '-' + props.idKey }>
				{ props.val }
			</label>
		</div>
	);
}

export default ListContent;