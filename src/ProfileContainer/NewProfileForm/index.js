import React from 'react'
import {Form, Button, Label, Modal, Header} from 'semantic-ui-react'

class NewProductForm extends React.Component{
	constructor(){
		super()
		this.state={
			images: '',
			firstName: '',
			lastName: '',
			daysSober: '',
			dateOfBirth: '',
			sponsor: false,
		}
	}


render(){
		return(
			<Modal 
			closeIcon={true} 
			trigger={<Button className="button">Add new</Button>}
			>
			<Header>
        	enter new info
      		</Header>
      		<Modal.Content >
			<Form onSubmit={this.handleSubmit}>
				<Label>iamges:</Label>
				<Form.Input
					type='text'
					name='images'
					value={this.state.images}
					onChange={this.handleChange}
				/>
				<Label>First Name:</Label>
				<Form.Input
					type='text'
					name='firstName'
					value={this.state.firstName}
					onChange={this.handleChange}
				/>
				<Label>Last Name:</Label>
				<Form.Input
					type='text'
					name='lastName'
					value={this.state.lastName}
					onChange={this.handleChange}
				/>
				<Label>Days Sober:</Label>
				<Form.Input
					type='text'
					name='daysSober'
					value={this.state.daysSober}
					onChange={this.handleChange}
				/>
				<Label>Date Of Birth:</Label>
				<Form.Input
					type='text'
					name='dateOfBirth'
					value={this.state.dateOfBirth}
					onChange={this.handleChange}
				/>
				<Label>sponsor:</Label>
				<Form.Input
					type='text'
					name='sponsor'
					value={this.state.sponsor}
					onChange={this.handleChange}
				/>				
				<Button type='Submit'>Add</Button>
			</Form>
			</Modal.Content>
			</Modal>

		)
	}

}
export default NewProductForm