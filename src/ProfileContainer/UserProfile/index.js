import React from 'react'
import { Card , Feed, Button} from 'semantic-ui-react'

function UserProfile(props){
	const profile = props.profile.map(profile => {
		return (
			<Card  key={profile.id} >

				<Card.Content >
					<Card.Header>first name: {profile.first_name}</Card.Header>
						<Card.Description>last name: {profile.last_name}</Card.Description>
						<Card.Content>
		        			days sober: {profile.days_sober}
		        			<br/>
		        			date of birth: $ {profile.date_of_birth}
		    			</Card.Content>
						<Card.Content>
		        			sponsor: {profile.sponsor}
		    			</Card.Content>
		    			<br/>
		    			
	    		</Card.Content>

			</Card>
		)
	})

	return(
		<div>
			{profile}
		</div>

	)
}

export default UserProfile