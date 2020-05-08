import React from 'react'
import { Form, Button, Label} from 'semantic-ui-react'

const form = {
	display: "flex",
	flexDirection: "column",
	width: "60%",
	paddingLeft: "40%"


}
class NewPostForm extends React.Component{
	constructor(){
		super()
		this.state={
			bio: '',
		}
	}
	render(){
		return(
			<React.Fragment >
			<Form onSubmit={this.handleSubmit} style={form}>
				<Label>Comment:</Label>
				<Form.Input
				type="text"
				name="Comment"
				placeholder="enter Comment"
				value={this.state.username}
				onChange={this.handleChange}
				/>
				<Button type="submit">
				Add Comment
				</Button>
			</Form>


			</React.Fragment>

		)
	}


}

export default NewPostForm