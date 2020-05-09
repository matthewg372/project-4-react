import React from 'react'
import {Form, Button, Label, Modal} from 'semantic-ui-react'

class EditCommentModal extends React.Component{
	constructor(props){
		super(props)
		this.state={
			bio: props.editComment.bio

		}
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