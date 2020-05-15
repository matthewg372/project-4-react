import React from 'react'
import { Form, Button, Label, Modal, Comment} from 'semantic-ui-react'

class NewCommentForm extends React.Component{
	constructor(){
		super()
		this.state = {
			bio: ''

		}
	}
	handleChange = (e) => {
		const state =  this.state
		state[e.target.name] = e.target.value
		this.setState(state)
	}
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.addComment(this.state)
		this.setState({
			bio: ''
		})
	}

	render(){
		return(
			<React.Fragment>
			<Form reply onSubmit={this.handleSubmit}>
				<Label>Comment:</Label>
      			<Form.TextArea
					type='text'
					name='bio'
					value={this.state.bio}
					onChange={this.handleChange}
      			/>
      			<Button type='Submit' content='Add Reply' labelPosition='left' icon='edit' primary />
    		</Form>


			</React.Fragment>

		)
	}
} 

export default NewCommentForm