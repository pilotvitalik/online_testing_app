//import style from './listItem.module.css';
import ItemAnswer from './ItemAnswer.js';

function ListItem(props){
	const answers = props.answers;
	const listAnswer = answers.map((answer) => 
		<ItemAnswer
			key={ answer.id }
			val={ answer.answer }
			idQuest={ props.idQuest }
			idAnsw={ answer.id }/>
	);

	return <div>
		<form>
			{ listAnswer }
		</form>
	</div>
}

export default ListItem;