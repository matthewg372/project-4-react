import React from 'react'
import {Card, Button} from 'semantic-ui-react'

function FriendList(props){
	const friends = props.friends.map(friend =>{
		console.log(friend);

		return(
			<Card key={friend.id}>
			<Card.Content >
				<Card.Header>Username: {friend.user.username}</Card.Header>
				<Card.Description>Sponsor: </Card.Description>
				<Card.Content>Days Sober: {friend.days_sober}</Card.Content>
			</Card.Content>
			<Card.Content>
			<Button onClick={() => props.addFriend(friend.id)}> Add Friend</Button>
			</Card.Content>

			</Card>



		)
	})
	const div = {
		marginLeft: "10%",
		marginTop: "2%",
		marginBottom: "2%",
		width: "200%"
	}
	return(
		<div style={div}>
			{friends}
		</div>

	)
}

export default FriendList