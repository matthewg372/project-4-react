import React from 'react'
import { Card , Feed, Button, Dropdown} from 'semantic-ui-react'

function MeetingsList(props){
	const meetings = props.meetings.map(meeting => {
		return (
			<Card  key={meeting.id}>
				{
				props.loggedIn
				&&
				<Dropdown text='settings'>
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
					{meeting.time}
					<br/>
					{meeting.area}
					</Card.Content>
		    		<Card.Content>
		    		{meeting.date}
		    		</Card.Content>
	    		</Card.Content>
			</Card>
		)
	})
	return (
		<div className="segment" >
			<div>
				{meetings}
			</div>
		</div>
	)
}

export default MeetingsList