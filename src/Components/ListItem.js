import React, { Component } from 'react';
import ItemAnswer from './ItemAnswer.js';
import style from './listItem.module.css';

class ListItem extends Component{
	constructor(props){
		super(props);
		this.state = {
			answerRight: '',
			answerText: '',
			num: '',
		};
		this.checkVal = this.checkVal.bind(this);
		this.nextQuest = this.nextQuest.bind(this);
		this.checkAnswer = this.checkAnswer.bind(this);
		this.defineAnswer = this.defineAnswer.bind(this);
		this.setNum = this.setNum.bind(this);
	}

	checkAnswer(event){
		if (this.state.num === this.props.rightAns){
			this.setState(state => ({
				answerRight: true,
			}));
			return false;
		}
		this.props.answers.forEach(item => {
			if (item.id === this.props.rightAns){
				this.setState(state => ({
					answerText: item.answer
				}));
			}
		});
		this.setState(state => ({
			answerRight: false,
		}));
	}

	nextQuest(){
		const nextInd = this.props.dataInd + 1;
		this.props.changeItem(nextInd);
		this.props.statusAnswer(this.state.answerRight, this.props.dataInd)
	}

	checkVal(event){
		this.setState({
			num: +event.target.value
		});
		this.checkAnswer();
	}

	defineAnswer(event){
		if (49 <= event.keyCode && event.keyCode <= 52){
			this.setState({
				num: +event.key,

			});
			this.checkAnswer();
		}	
		if (event.keyCode === 13){
			this.nextQuest();
		}
	}

	setNum(number){
		this.setState({
			num: number
		});
	}

	componentDidMount(){
		console.log('componentDidMount')
		document.addEventListener('keypress', this.defineAnswer);
	}

	componentWillUnmount(){
		console.log('componentWillUnmount');
		document.removeEventListener('keypress', this.defineAnswer);
	}

	render(){
		console.log('component render');
		let mes;
		console.log(this.props.answers)
		const answers = this.props.answers;
		const rightAnswer = `Правильный ответ: ${ this.state.answerText }`;

		switch(this.state.answerRight){
			case true:
				mes = <React.Fragment><p className={ style.trueAnswer }>Верно</p><button type='button' onClick={ this.nextQuest }>Следующий вопрос</button></React.Fragment>;
				break;
			case false:
				mes = <React.Fragment><p>Не верно</p><p>{ rightAnswer }</p><button type='button' onClick={ this.nextQuest }>Следующий вопрос</button></React.Fragment>;
				break;
			default:
				mes = '';
				break;
		}

		const listAnswer = answers.map((answer) => 
			<ItemAnswer
				key={ answer.id }
				val={ answer.answer }
				idQuest={ this.props.idQuest }
				idAnsw={ answer.id }
				func={ this.setNum }
				checkAnsw={ this.checkVal }
				keyAnswer={ this.state.num }/>
		);
		return(
			<div data-ind={ this.props.dataInd }>
				<h2>{ this.props.titleQuest }</h2>
				<h3>Вопрос № { this.props.idQuest.replace(/[a-zA-Z]+_/g, '') }. { this.props.question }</h3>
				<form>
					{ listAnswer }
				</form>
				<button
					type='button'
					onClick={ this.checkAnswer }>
					Проверить
				</button>
				{ mes }
			</div>
		);
	}
}

export default ListItem;