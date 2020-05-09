import React from 'react'
import { Card , Feed, Button, Dropdown} from 'semantic-ui-react'
const post = {
	textAlign: "right"
}
function PostsList(props){
	console.log(props);
	const posts = props.posts.map(post => {
		return (
			<Card  key={post.id}>
				<Dropdown text='settings' style={post}>
			    <Dropdown.Menu>
			      <Dropdown.Item text='Delete' onClick={() => props.deletePost(post.id)} />
			      <Dropdown.Item text='Edit' onClick={() => props.editPost(post.id)} />
			    </Dropdown.Menu>
			  </Dropdown>

				<Card.Content >
					<Card.Header>
					{post.user.username}
					</Card.Header>
					<br/>
					{post.bio}
					<br/>
					<br/>
		    		<Card.Content>
		    		{post.date}
		    		</Card.Content>

	    		</Card.Content>

			</Card>
		)
	})
	return (
		<div className="segment">
			<div>
				{posts}
			</div>
		</div>
	)

}

export default PostsList