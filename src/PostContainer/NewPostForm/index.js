import React from 'react'
import { Form, Button, Label, Modal} from 'semantic-ui-react'

const modal = {
	width: "60%",
	height: "60%"


}
class NewPostForm extends React.Component{
	constructor(){
		super()
		this.state={
			bio: '',
			images: ''
		}
	}
	uploadPicture = async (e) => {

	    const files = e.target.files 
	    const data = new FormData();
	    data.append("file", files[0]);
	    data.append("upload_preset", "tu0wwnqy");
	    const response = await fetch(
	      "https://api.cloudinary.com/v1_1/matt372/image/upload",
	      {
	        method: "POST",
	        body: data,
	      }
	    );
	    const file = await response.json();
	    this.setState({
	    	images: file.secure_url
	    })
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
			images: ''
		})
	}
	render(){
		return(
			<React.Fragment >
			<Modal style={Modal}
			closeIcon={true} 
			trigger={<Button className="button">Add new</Button>}
			>
			<Form onSubmit={this.handleSubmit}>
				<Label>Post:</Label>
				<Form.Input
				type="text"
				name="bio"
				placeholder="enter Post"
				value={this.state.bio}
				onChange={this.handleChange}
				/>
				<Form.Input
					type='file'
					name='images'
					onChange={this.uploadPicture}	
					/>
				<Button type="submit">
				Add Post
				</Button>
			</Form>
			</Modal>


			</React.Fragment>

		)
	}


}

export default NewPostForm