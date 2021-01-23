import { Link } from 'react-router-dom';

function SetParam(props) {
	console.log(props.questions)
	return (
		<button
			type='button'>
			<Link to='/test'>К тестам</Link>
		</button>
	);
}

export default SetParam;