import ListItem from './listItem.js';

function Common(props){
	const quest = props.questions;
	console.log(quest)
	const listItems = quest.map((item) => 
		<ListItem key={ item.id_quest } val={ item.name_quest }/>
	);
	return (
		<ul>
			{ listItems }
		</ul>
	);
}

export default Common;