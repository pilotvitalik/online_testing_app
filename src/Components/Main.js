
import Test from './Test.js';
import SetParam from './SetParam.js';
import 	{
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';


function Main(props){
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<SetParam questions={ props.questions }/>
				</Route>
				<Route path='/test'>
					<Test questions={ props.questions }/>
				</Route>
			</Switch>
		</Router>
	);
}

export default Main;