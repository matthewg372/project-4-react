import React from 'react'
import { Comment , Header, Button, Form} from 'semantic-ui-react'


function CommentsList(props){

	const comments = props.comments.map(comment => {
		return (
			<Comment.Group>
			<Comment>
			  <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
			  <Comment.Content>
			    <Comment.Author as='a'>{comment.user.username}</Comment.Author>
			    <Comment.Metadata>
			      <div>Today at 5:42PM</div>
			    </Comment.Metadata>
			    <Comment.Text>{comment.bio}</Comment.Text>
			    <Comment.Actions>
			      <Comment.Action>Reply</Comment.Action>
			    </Comment.Actions>
			  </Comment.Content>
			</Comment>
			</Comment.Group>

		)
	})
	return (
		<div className="segment">
			<div>
				{comments}
			</div>
		</div>
	)

}
export default CommentsList