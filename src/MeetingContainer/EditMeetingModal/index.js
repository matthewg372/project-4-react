import React from 'react'
import {Form, Button, Label, Modal, Header} from 'semantic-ui-react'

class NewMeetingModal extends React.Component{
	constructor(props){
		super(props)
		this.state={
			info: props.editMeeting.info,
			area: props.editMeeting.area,
			time: props.editMeeting.time,
		}
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
		
	}
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.updateMeeting(this.state)
	}

render(){
		return(
			<Modal open={true} closeIcon={true} >
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