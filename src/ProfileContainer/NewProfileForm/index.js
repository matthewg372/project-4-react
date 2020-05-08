import React from 'react'
import {Form, Button, Label, Modal, Header} from 'semantic-ui-react'

class NewProductForm extends React.Component{
	constructor(){
		super()
		this.state={
			images: '',
			first_name: '',
			last_name: '',
			days_sober: '',
			date_of_birth: '',
			sponsor: false,
		}
	}
	handleChange = (e) => {
		const state =  this.state
		state[e.target.name] = e.target.value
		this.setState(state)
	}
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.addProfile(this.state)
		this.setState({
			images: '',
			first_name: '',
			last_name: '',
			days_sober: '',
			date_of_birth: '',
			sponsor: false,
		})
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
				<Button type='Submit'>Add</Button>
			</Form>
			</Modal.Content>
			</Modal>

		)
	}

}
export default NewProductForm