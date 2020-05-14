import React from 'react'
import {Form, Button, Label, Modal, Header} from 'semantic-ui-react'

class EditToDoModal extends React.Component{
	constructor(props){
		super(props)
		this.state={
			item: props.editToDo.item,
		}
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
		
	}
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.updateToDo(this.state)
	}


render(){
		return(
			<div>
			<Modal open={true} closeIcon={true} closeModal={this.props.closeModal}>
      		<Modal.Content >
			<Form onSubmit={this.handleSubmit}>
				<Label>item:</Label>
				<Form.Input
					type='text'
					name='item'
					value={this.state.item}
					onChange={this.handleChange}
				/>	
				<Button type='Submit'>Update Profile</Button>
			</Form>
			</Modal.Content>
			</Modal>
			</div>


		)
	}

}
export default EditToDoModal