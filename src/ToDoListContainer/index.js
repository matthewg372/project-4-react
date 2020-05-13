import React from 'react'
import NewToDoForm from './NewToDoForm'
import ToDo from './ToDo'

class ToDoList extends React.Component{
	constructor(){
		super()
		this.state ={
			ToDo: [],

		}
	}
	componentDidMount(){
		this.getToDo()
	}
	getToDo = async () => {
		try{
			const url = process.env.REACT_APP_API_URL + '/api/v1/to_do_lists/users/' + this.props.userId
			console.log(url);
			const toDosResponse = await fetch(url,{
				credentials: 'include'
			})
			const toDosJson = await toDosResponse.json()
			console.log(toDosJson.data);
			if(toDosResponse.status === 200){
				this.setState({
					ToDo: toDosJson.data,
				})
			}
		}catch(err){
			console.log(err)	
		}
	}

	addToDo = async (toDoToAdd) => {
		try{
			const url = process.env.REACT_APP_API_URL + '/api/v1/to_do_lists/'
			const createToDoResponse = await fetch(url,{
				credentials: 'include',
				method: 'POST',
				headers:{
					'content-type': 'application/json'
				},
				body: JSON.stringify(toDoToAdd)
			})
			const createToDoJson = await createToDoResponse.json()
			if(createToDoResponse.status === 200){
				this.setState({
					ToDo:[...this.state.ToDo, createToDoJson]
				})
			}
			
		
		}catch(err){
			console.log(err)	
		}
	}	
	render(){
		return(
			<div>
				<NewToDoForm
				addToDo={this.addToDo}
				/>
				<ToDo
				ToDos={this.state.ToDo}
				/>
			</div>
			
		)

	}
}

export default ToDoList