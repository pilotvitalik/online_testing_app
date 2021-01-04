function ListItem(props){
	const id_question = 'quest-' + props.questId;
	return <div>
		<label htmlFor={ id_question }>{ props.title }</label>
		<input type='text' id={ id_question }/>
		<p>{ props.answer }</p>
	</div>
}

export default ListItem;