import React from 'react'
import MeetingList from './MeetingList'
import NewMeetingModal from './NewMeetingModal'
import EditMeetingModal from './EditMeetingModal'

class MeetingContainer extends React.Component{
	constructor(){
		super()
		this.state={
			meetings: [],
			idOfMeetingToEdit: -1

		}
	}
	componentDidMount(){
		this.getMeetings()
	}
	getMeetings = async () => {
		try{
			const url = process.env.REACT_APP_API_URL + '/api/v1/meetings/all'
			const meetingsResponse = await fetch(url)
			const meetingsJson = await meetingsResponse.json()
			this.setState({
				meetings: meetingsJson.data
			})
			
		
		}catch(err){
			console.log(err)	
		}
		
	}
	addMeeting = async (meetingToAdd) => {
		try{
			const url = process.env.REACT_APP_API_URL + '/api/v1/meetings/'
			const meetingsResponse = await fetch(url,{
				credentials: 'include',
				method: 'POST',
				body: JSON.stringify(meetingToAdd),
				headers:{
					'content-type': 'application/json'
				}
			})
			const meetingsJson = await meetingsResponse.json()
			if(meetingsResponse.status === 201){
				this.setState({
					meetings:[...this.state.meetings, meetingsJson]
				})
			}
				this.getMeetings()
		
		}catch(err){
			console.log(err)	
		}
	}
	deleteMeeting = async (meetingToDelete) =>{
		try{
			const url = process.env.REACT_APP_API_URL + '/api/v1/meetings/' + meetingToDelete
			const deleteMeetingResponse = await fetch(url ,{
				credentials: 'include',
				method: 'DELETE'
			})
			const deletedMeetingJson = await deleteMeetingResponse.json()
			if(deleteMeetingResponse.status === 200){
				this.setState({
					meetings: this.state.meetings.filter(meeting => meeting.id != meetingToDelete)
				})
			}
		}catch(err){
			console.log(err)	
		}
	}
	updateMeeting =  async (meetingToUpdate) => {
		const url = process.env.REACT_APP_API_URL + '/api/v1/meetings/' + this.state.idOfMeetingToEdit
		try{
			const updateMeetingResponse = await fetch(url ,{
				credentials: 'include',
				method: 'PUT',
				body: JSON.stringify(meetingToUpdate),
				headers:{
					'content-type': 'application/json'
				}
			})
			const updateMeetingJson = await updateMeetingResponse.json()
			if(updateMeetingResponse.status === 200){
				const meetings = this.state.meetings
				const indexOfMeetingBeingUpdated = meetings.findIndex(meeting => meeting.id == this.state.idOfMeetingToEdit)
				meetings[indexOfMeetingBeingUpdated] = updateMeetingJson.data
				this.setState({
					meetings: meetings,
					idOfMeetingToEdit: -1
				})
			}
		}catch(err){
			console.log(err)	
		}
	}
	editMeeting = (editMeeting) => {
		this.setState({
			idOfMeetingToEdit: editMeeting

		})
	}
	closeModal = () =>{
		this.setState({
			idOfMeetingToEdit: -1
		})
	}
	render(){
		return(
			<React.Fragment>
				{
				this.props.loggedIn
				&&
				<NewMeetingModal
				addMeeting={this.addMeeting}
				/>
				}
				<MeetingList
				meetings={this.state.meetings}
				loggedIn={this.props.loggedIn}
				deleteMeeting={this.deleteMeeting}
				/>
				<EditMeetingModal/>
			</React.Fragment>


		)
	}
}


export default MeetingContainer