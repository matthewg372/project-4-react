import React from 'react'
import {Card} from 'semantic-ui-react'

function FriendList(props){
	const friends = props.friends.map(friend =>{
		return(
			<Card.Content key={friend.id}>
				<Card.Header>{friend.user.username}</Card.Header>
			</Card.Content>


		)
	})
	return(
		<div>
			{friends}
		</div>

	)
}

export default FriendList