import React from 'react'
import CommentContainer from '../CommentContainer'
import { Card , Feed, Button, Dropdown} from 'semantic-ui-react'

const post = {
	flex: "display",
	justifyContent: "right"
}
function PostsList(props){
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
	    		<CommentContainer
	    		postId={post.id}
	    		/>
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