import React from 'react'
import {Form, Button, Label, Modal, Header} from 'semantic-ui-react'

class NewMeetingModal extends React.Component{
	constructor(){
		super()
		this.state={
			info: '',
			area: '',
			time: '',
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
				<Label>Info:</Label>
				<Form.Input
					type='text'
					name='info'
					value={this.state.info}
					onChange={this.handleChange}
				/>
				<Label>Time:</Label>
				<Form.Input
					type='text'
					name='time'
					value={this.state.time}
					onChange={this.handleChange}
				/>
				<Label>Area:</Label>
				<Form.Input
					type='text'
					name='area'
					value={this.state.area}
					onChange={this.handleChange}
				/>
				<Button type='Submit'>Add</Button>
			</Form>
			</Modal.Content>
			</Modal>

		)
	}

}
export default NewMeetingModal