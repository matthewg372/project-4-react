import React from 'react'
import {Form, Button, Label, Modal, Header} from 'semantic-ui-react'
import { GoogleComponent } from 'react-google-location'
class NewMeetingModal extends React.Component{
	constructor(){
		super()
		this.state={
			info: '',
			area: '',
			time: '',
			longitude: '',
			lat: ''
		}
	}
	handleChange = (e) => {
		const state =  this.state
		state[e.target.name] = e.target.value
		this.setState(state)
	}
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.addMeeting({
			info: this.state.info,
			area: this.state.area.place,
			time: this.state.time,
			lat: this.state.area.coordinates.lat,
			longitude: this.state.area.coordinates.lng
		})
		this.setState({
			info: '',
			area: '',
			time: '',
			longitude: '',
			lat: '',
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
         		<GoogleComponent
		          apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
		          language={'en'}
		          country={'country:in|country:us'}
		          coordinates={true}
		          locationBoxStyle={'custom-style'}
		          onChange={(e) => { this.setState({ area: e }) }} />
				<Button type='Submit'>Add</Button>
			</Form>
			</Modal.Content>
			</Modal>

		)
	}

}
export default NewMeetingModal