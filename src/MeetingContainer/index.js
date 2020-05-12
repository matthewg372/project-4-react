import React from 'react'
import MeetingList from './MeetingList'
import NewMeetingModal from './NewMeetingModal'

class MeetingContainer extends React.Component{
	constructor(){
		super()
		this.state={
			meetings: []

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
				headers:{
					'content-type': 'application/json'
				}
				body: JSON.stringify(meetingToAdd)
			})
			const meetingsJson = await meetingsResponse.json()
			if(meetingsResponse.status === 201){
				this.setState({
					meeting:[...this.state.meeting, meetingsJson]
				})
				this.getMeetings()
			}
		
		}catch(err){
			console.log(err)	
		}
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
				/>
			</React.Fragment>


		)
	}
}


export default MeetingContainer