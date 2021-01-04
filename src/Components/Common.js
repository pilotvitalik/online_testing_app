import ListItem from './listItem.js';

import style from './common.module.css';

function Common(props){
	const quest = props.questions;
	const listItems = quest.map((item) => 
		<ListItem key={ item.id_quest } title={ item.name_quest } answer={ item.answer } questId={ item.id_quest }/>
	);
	return (
		<div className={ style.common }>
			{ listItems }
		</div>
	);
}

export default Common;