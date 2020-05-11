import React from 'react'
import {Form, Button, Label, Modal} from 'semantic-ui-react'

class EditCommentModal extends React.Component{
	constructor(props){
		super(props)
		this.state={
			bio: props.editComment.bio

		}
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.updateComment(this.state)
	}

render(){
		return(
			<div>
			<Modal open={true} closeIcon={true} onClose={this.props.closeModal}>
      		<Modal.Content >
			<Form onSubmit={this.handleSubmit}>
				<Label>Comment:</Label>
				<Form.Input
					type='text'
					name='bio'
					value={this.state.bio}
					onChange={this.handleChange}
				/>		
				<Button type='Submit'>Update Comment</Button>
			</Form>
			</Modal.Content>
			</Modal>
			</div>


		)
	}

}
export default EditCommentModal