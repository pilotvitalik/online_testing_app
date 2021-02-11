import { useState, useEffect } from 'react';
import SelectType from './SelectType.js';
import Test from './Test.js';
import SetParam from './SetParam.js';
import 	{
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';


function Main(props){
	const tableContents = props.tableContents;
	const [startInd, setStartInd] = useState(0);
	const [quest, setQuest] = useState(props.nodeQuestions);
	const [startQuest, setStartQuest] = useState(0);

	const changeQuest = (val) => {
		console.log('19 from chageQuest');
		console.log(`val = ${val}`);
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

	const changeType = (isMix, nameTest, questNum) => {
		console.log('35 from Main.js');
		console.log(`isMix = ${isMix}`);
		console.log(`nameTest = ${nameTest}`);
		console.log(startInd);
		setStartQuest(questNum);
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
			    for (let key in quest[j]){
			    	if (key === 'name_test'){
			    		quest[j]['vis_name_test'] = quest[j][key];
			    		delete quest[j][key];
			    	}
			    }
			}
			quest.push('commonArray');
			return false;
		}
	});

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