import { useState } from 'react';
import SelectType from './SelectType.js';
import Test from './Test.js';
import SetParam from './SetParam.js';
import 	{
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';


function Main(props){
	const quest = props.nodeQuestions;
	const tableContents = props.tableContents;
	const [startInd, setStartInd] = useState(0);

	const changeQuest = (val) => {
		setStartInd(val);
	}

	const changeType = () => {
		for (let i = quest.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
		    [quest[i], quest[j]] = [quest[j], quest[i]];
		}
	}

	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<SelectType tableContents={ tableContents }/>
				</Route>
				<Route path='/param'>
					<SetParam questions={ quest } changeItem={ changeQuest } changeType={ changeType }/>
				</Route>
				<Route path='/test'>
					<Test questions={ quest } changeItem={ changeQuest } startInd={ startInd }/>
				</Route>
			</Switch>
		</Router>
	);
}

export default Main;