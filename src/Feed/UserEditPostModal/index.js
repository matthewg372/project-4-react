import React from 'react'
import {Form, Button, Label, Modal, Header} from 'semantic-ui-react'

class EditPostModal extends React.Component{
	constructor(props){
		super(props)
		this.state={
			bio: props.editPost.bio,
		}
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
		
	}
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.updatePost(this.state)
	}


render(){
		return(
			<div>
			<Modal open={true} closeIcon={true} onClose={this.props.closeModal}>
      		<Modal.Content >
			<Form onSubmit={this.handleSubmit}>
				<Label>post:</Label>
				<Form.Input
					type='text'
					name='bio'
					value={this.state.bio}
					onChange={this.handleChange}
				/>			
				<Button type='Submit'>Update Post</Button>
			</Form>
			</Modal.Content>
			</Modal>
			</div>


		)
	}

}
export default EditPostModal