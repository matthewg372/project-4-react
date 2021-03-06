import React from 'react'
import CommentContainer from '../CommentContainer'
import { Card , Feed, Button, Dropdown, Comment} from 'semantic-ui-react'
import './index.css'
const post = {
	width: "500%",
	paddingLeft: "10%",
	paddingTop: "2%",
	paddingBottom: "2%"
}
function PostsList(props){
	const image ={
		height: '50%',
		width: '50%',
		padding: '10px',
		marginLeft: '25%'
	}
const profile = props.profile.map(profile => {
		return (
			<Card  key={profile.id} style={post}>
				  <Comment.Avatar src={profile.images} />
				  <Comment.Content>
				    <Comment.Author as='a'>{profile.username}</Comment.Author>
				  </Comment.Content>
			</Card>
		)
	})
	const posts = props.posts.map(post => {
		return (
			<Card  key={post.id} style={post}>
				<Dropdown text='Settings' style={post}>
				    <Dropdown.Menu>
				    <Dropdown.Item text='Delete' onClick={() => props.deletePost(post.id)} />
				    <Dropdown.Item text='Edit' onClick={() => props.editPost(post.id)} />
				    </Dropdown.Menu>
			 	</Dropdown>
				<Card.Content style={post}>
					<Card.Header>
					{post.user.username}
					</Card.Header>
					<Card.Content>
					{
					post.images === ""
					?
					null 
					:
					<img src={post.images} style={image}/>
					}
					</Card.Content>
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
	const Posts = props.friendPost.map(post => {
		return (
			<Card  key={post.id} style={post}> 
				<Card.Content >
					<Card.Header>
					{post.user.username}
					</Card.Header>
					<Card.Content>
					{
					post.images === ""
					?
					null 
					:
					<img src={post.images} style={image}/>
					}
					</Card.Content>
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
		<div className="segment" style={post}>
			<div >

				{posts}
				{Posts}
			</div>
		</div>
	)
}

export default PostsList