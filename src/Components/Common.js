import ListItem from './listItem.js';

function Common(props){
	const quest = props.questions;
	const listItems = quest.map((item) => 
		<ListItem key={ item.id_quest } title={ item.name_quest } answer = { item.answer }/>
	);
	return (
		<div>
			{ listItems }
		</div>
	);
}

export default Common;