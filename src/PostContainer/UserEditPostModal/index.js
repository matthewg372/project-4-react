import React from 'react'
import {Form, Button, Label, Modal, Header} from 'semantic-ui-react'

class EditPostModal extends React.Component{
	constructor(props){
		super(props)
		console.log(props);
		this.state={
			bio: props.editPost.bio,
			images: props.editPost.images
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
				<Form.Input
					type='file'
					name='images'
					onChange={this.uploadPicture}	
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