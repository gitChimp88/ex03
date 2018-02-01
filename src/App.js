import React from 'react'
import Header from './Header'

export default class App extends React.Component {
	
	constructor(){
		super();
		this.state = {
			title: "There is no text displayed!"
		}
	}
	
	changeText(title){
		this.setState({title: title})
	}
	
	render(){
		
		
		/*
		setTimeout(()=>{
			this.setState({title: "finally!!"});
		}, 5000)
		*/
		
		return (
			<div>
				<Header changeText={this.changeText.bind(this)} title={this.state.title}/>
			</div>
		)
	}
}


