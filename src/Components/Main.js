import { useState } from 'react';
import Test from './Test.js';
import SetParam from './SetParam.js';
import 	{
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';


function Main(props){
	const [startInd, setStartInd] = useState(0);

	const changeQuest = (val) => {
		setStartInd(val);
	}

	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<SetParam questions={ props.questions } changeItem={ changeQuest }/>
				</Route>
				<Route path='/test'>
					<Test questions={ props.questions } changeItem={ changeQuest } startInd={ startInd }/>
				</Route>
			</Switch>
		</Router>
	);
}

export default Main;