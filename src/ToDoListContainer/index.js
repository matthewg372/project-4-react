import React from 'react'
import NewToDoForm from './NewToDoForm'


class ToDoList extends React.Component{
	constructor(){
		super()
		this.state ={
			ToDo: [],

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
			this.getPosts()
			
		
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
			</div>
			
		)

	}
}

export default ToDoList