import React from 'react'
import { Form, Button, Label, Modal} from 'semantic-ui-react'

class NewCommentForm extends React.Component{
	constructor(){
		super()
		this.state = {
			bio: '',

		}
	}
	render(){
		return(
			<React.Fragment>
			<Modal 
			closeIcon={true} 
			trigger={<Button className="button">Add Comment</Button>}>
      		<Modal.Content >
			<Form onSubmit={this.handleSubmit}>
				<Label>Comment:</Label>
				<Form.Input
					type='text'
					name='bio'
					value={this.state.bio}
					onChange={this.handleChange}
				/>
				<Button type='Submit'>Add</Button>
			</Form>
			</Modal.Content>
			</Modal>


			</React.Fragment>

		)
	}
} 

export default NewCommentForm