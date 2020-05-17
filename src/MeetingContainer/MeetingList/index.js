import React from 'react'
import { Card , Feed, Button, Dropdown} from 'semantic-ui-react'

function MeetingsList(props){
	const list = {
		marginLeft: "25%",
		marginTop: "30%",
		marginBottom: "5%",
		width: "300%"
	}
	const content = {
		backgroundColor: "#e7e7e7",
		paddingTop: "2%",
		paddingLeft: "2%",
		paddingBottom: "2%",
		borderRadius: "5px"
	}
	const meetings = props.meetings.map(meeting => {
		return (
			<Card  key={meeting.id}>
				{
				props.loggedIn
				&&
				<Dropdown text='Options'>
				    <Dropdown.Menu>
				    <Dropdown.Item text='Delete' onClick={() => props.deleteMeeting(meeting.id)} />
				    <Dropdown.Item text='Edit' onClick={() => props.editMeeting(meeting.id)} />
				    </Dropdown.Menu>
			 	</Dropdown>	
				}
				<Card.Content >
					<Card.Header>
					{meeting.user.username}
					</Card.Header>
					<Card.Content>
					<br/>
					{meeting.info}
					<br/>
					</Card.Content>
					{meeting.time}
					<br/>
					<br/>

					<Card.Content style={content}>
					{meeting.area}

					<br/>
		    		{meeting.date}
					</Card.Content>

	    		</Card.Content>
			</Card>
		)
	})
	return (
		<div className="segment" >
			<div style={list}>
				{meetings}
			</div>
		</div>
	)
}

export default MeetingsList