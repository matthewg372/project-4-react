import React from 'react'
import NewToDoForm from './NewToDoForm'
import ToDo from './ToDo'
import EditToDoModal from './EditToDoModal'

class ToDoList extends React.Component{
	constructor(){
		super()
		this.state ={
			item: [],
			idOfToDoToEdit: -1

		}
	}
	componentDidMount(){
		this.getToDo()
	}
	getToDo = async () => {
		try{
			const url = process.env.REACT_APP_API_URL + '/api/v1/to_do_lists/users/' + this.props.userId
			const toDosResponse = await fetch(url,{
				credentials: 'include'
			})
			const toDosJson = await toDosResponse.json()
			if(toDosResponse.status === 200){
				this.setState({
					item: toDosJson.data,
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
					item:[...this.state.item, createToDoJson]
				})
			}
			this.getToDo()
			
		
		}catch(err){
			console.log(err)	
		}
	}
	deleteToDo = async (toDoDelete) =>{
		try{
			const url = process.env.REACT_APP_API_URL + '/api/v1/to_do_lists/' + toDoDelete
			const deleteToDoResponse = await fetch(url ,{
				credentials: 'include',
				method: 'DELETE'
			})
			const deletedToDoJson = await deleteToDoResponse.json()
			if(deleteToDoResponse.status === 200){
				this.setState({
					item: this.state.item.filter(item => item.id != toDoDelete)
				})
			}
		}catch(err){
			console.log(err)	
		}
	}
	updateToDo =  async (toDoToUpdate) => {
		const url = process.env.REACT_APP_API_URL + '/api/v1/to_do_lists/' + this.state.idOfToDoToEdit
		try{
			const updateToDoResponse = await fetch(url ,{
				credentials: 'include',
				method: 'PUT',
				body: JSON.stringify(toDoToUpdate),
				headers:{
					'content-type': 'application/json'
				}
			})
			const updateItemJson = await updateToDoResponse.json()
			if(updateToDoResponse.status === 200){
				const item = this.state.item
				const indexOfTodoBeingUpdated = item.findIndex(item => item.id == this.state.idOfToDoToEdit)
				item[indexOfTodoBeingUpdated] = updateItemJson.data
				this.setState({
					item: item,
					idOfToDoToEdit: -1
				})
			}
		}catch(err){
			console.log(err)	
		}
	}
	editToDo = (editToDo) =>{
		this.setState({
			idOfToDoToEdit: editToDo
		})
	}
	render(){
		const button = {
			marginLeft: "3%",
			marginTop: "2%"
		}
		const h2 = {
			marginTop:"2%",
			marginLeft: "2%"
		}
		return(
			<div>
				<h2 style={h2}>
					To-Do list for this week.
				</h2>
				<div style={button}>
					<NewToDoForm 
					
					addToDo={this.addToDo}
					/>
				</div>

				<ToDo
				ToDos={this.state.item}
				loggedIn={this.props.loggedIn}
				deleteToDo={this.deleteToDo}
				editToDo={this.editToDo}
				/>
				{
				this.state.idOfToDoToEdit !== -1
				&&
				<EditToDoModal
				updateToDo={this.updateToDo}
				editToDo={this.state.item.find((item) => item.id === this.state.idOfToDoToEdit)}
				closeModal={this.closeModal}
				/>
				}
			</div>
			
		)

	}
}

export default ToDoList