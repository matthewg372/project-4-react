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
	handleChange = (e) => {
		const state =  this.state
		state[e.target.name] = e.target.value
		this.setState(state)
	}
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.addPost(this.state)
		this.setState({
			bio: '',
		})
		this.props.getPosts()
	}
	render(){
		return(
			<React.Fragment >
			<Form onSubmit={this.handleSubmit} style={form}>
				<Label>Post:</Label>
				<Form.Input
				type="text"
				name="bio"
				placeholder="enter Post"
				value={this.state.bio}
				onChange={this.handleChange}
				/>
				<Button type="submit">
				Add Post
				</Button>
			</Form>


			</React.Fragment>

		)
	}


}

export default NewPostForm