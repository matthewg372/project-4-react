import React from 'react'
import {Form, Button, Label, Modal, Header} from 'semantic-ui-react'

class EditProfileModal extends React.Component{
	constructor(props){
		super(props)
		this.state={
			images: props.editProfile.images,
			first_name: props.editProfile.first_name,
			last_name: props.editProfile.last_name,
			days_sober: props.editProfile.days_sober,
			date_of_birth: props.editProfile.date_of_birth,
			sponsor: props.editProfile.sponsor
		}
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
		
	}
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.updateProfile(this.state)
	}


render(){
		return(
			<div>
			<Header>
        	enter new info
      		</Header>
			<Modal open={true} closeIcon={true} closeModal={this.props.closeModal}>
      		<Modal.Content >
			<Form onSubmit={this.handleSubmit}>
				<Label>images:</Label>
				<Form.Input
					type='text'
					name='images'
					value={this.state.images}
					onChange={this.handleChange}
				/>
				<Label>First Name:</Label>
				<Form.Input
					type='text'
					name='first_name'
					value={this.state.first_name}
					onChange={this.handleChange}
				/>
				<Label>Last Name:</Label>
				<Form.Input
					type='text'
					name='last_name'
					value={this.state.last_name}
					onChange={this.handleChange}
				/>
				<Label>Days Sober:</Label>
				<Form.Input
					type='number'
					name='days_sober'
					value={this.state.days_sober}
					onChange={this.handleChange}
				/>
				<Label>Date Of Birth:</Label>
				<Form.Input
					type='number'
					name='date_of_birth'
					value={this.state.date_of_birth}
					onChange={this.handleChange}
				/>
				<Label>sponsor:</Label>
				<Form.Input
					type='text'
					name='sponsor'
					value={this.state.sponsor}
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
export default EditProfileModal