import React from 'react'
import CommentContainer from '../CommentContainer'
import { Card , Feed, Button, Dropdown, Comment} from 'semantic-ui-react'

const post = {
	paddingLeft: "40%",
	paddingTop: "2%",
	paddingBottom: "2%"
}
function PostsList(props){
const profile = props.profile.map(profile => {
		return (
			<Card  key={profile.id}>
				  <Comment.Avatar src={profile.images} />
				  <Comment.Content>
				    <Comment.Author as='a'>{profile.username}</Comment.Author>
				  </Comment.Content>
			</Card>
		)
	})
	const posts = props.posts.map(post => {
		return (
			<Card  key={post.id}>
				<Dropdown text='settings'>
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
	const friendPosts = props.friendsPosts.map(friendPost => {
		return (
			<Card  key={friendPost.id}>
				<Card.Content >
					<Card.Header>
					{friendPost.user.username}
					</Card.Header>
					<br/>
		    		{friendPost.bio}
					<br/>
					<br/>
		    		<Card.Content>
		    		{friendPost.date}
		    		</Card.Content>
	    		</Card.Content>
	    		<CommentContainer
	    		postId={friendPost.id}
	    		/>
			</Card>
		)
	})
	return (
		<div className="segment" style={post} >
			<div>
				{friendPosts}

				{posts}
			</div>
		</div>
	)
}

export default PostsList