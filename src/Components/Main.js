import { useState, useEffect } from 'react';
import SelectType from './SelectType.js';
import Test from './Test.js';
import SetParam from './SetParam.js';
import 	{
	BrowserRouter as Router,
	Switch,
	Route,
	useLocation
} from 'react-router-dom';


function Main(props){
	const tableContents = props.tableContents;
	const [startInd, setStartInd] = useState(0);
	const [quest, setQuest] = useState(props.nodeQuestions);
	const [startQuest, setStartQuest] = useState(0);

	const changeQuest = (val) => {
		setStartInd(val);
	}

	const defType = (type) => {
		if (type !== 'node'){
			changeQuestType();
			return false;
		}
		setQuest(props.nodeQuestions);
	}

	const changeQuestType = () => {
		setQuest(props.oopQuestions);
	}

	const changeType = (isMix, nameTest) => {
		setStartQuest(startInd);
		defType(nameTest);
		if (isMix === 'inOrder'){
			quest.sort((a, b) => {
				return a.id_quest - b.id_quest;
			});
			return false;
		}
		for (let i = quest.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
		    [quest[i], quest[j]] = [quest[j], quest[i]];
		}
	}

	const changeGlobalMix = () => {
		let commonTests = props.nodeQuestions.concat(props.oopQuestions)
		commonTests.push('mixArray');
		setQuest(commonTests);
	}

	useEffect(() => {
		if (quest[quest.length - 1] === 'mixArray'){
			quest.pop();
			for (let i = quest.length - 1; i > 0; i--) {
				let j = Math.floor(Math.random() * (i + 1));
			    [quest[i], quest[j]] = [quest[j], quest[i]];
			}
			return false;
		}
	});

	console.log(quest);

	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<SelectType tableContents={ tableContents } changeGlobalMix={ changeGlobalMix }/>
				</Route>
				<Route path='/param'>
					<SetParam changeItem={ changeQuest } changeType={ changeType }/>
				</Route>
				<Route path='/test'>
					<Test questions={ quest } changeItem={ changeQuest } startInd={ startInd } startQuest={ startQuest }/>
				</Route>
			</Switch>
		</Router>
	);
}

export default Main;