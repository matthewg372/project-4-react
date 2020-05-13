import React from 'react'
import {Form, Button, Label, Modal, Header} from 'semantic-ui-react'

class NewMeetingModal extends React.Component{
	constructor(){
		super()
		this.state={
			item: '',
		}
	}

render(){
		return(
			<Modal 
			closeIcon={true} 
			trigger={<Button className="button">Add new</Button>}
			>
			<Header>
        	What Do You Have To Do?
      		</Header>
      		<Modal.Content >
			<Form onSubmit={this.handleSubmit}>
				<Label>Info:</Label>
				<Form.Input
					type='text'
					name='item'
					value={this.state.item}
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