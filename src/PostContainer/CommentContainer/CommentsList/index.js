import React from 'react'
import { Comment , Header, Button, Form, Dropdown} from 'semantic-ui-react'
function CommentsList(props){

	const comments = props.comments.map(comment => {
		return (
			<Comment.Group key={comment.id}>
				<Dropdown text='Edit/Delete'>
				    <Dropdown.Menu>
					<Dropdown.Item text='Delete' onClick={() => props.deleteComment(comment.id)} />
				    <Dropdown.Item text='Edit' onClick={() => props.editComment(comment.id)} />
				    </Dropdown.Menu>
			 	</Dropdown>
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

  	return(
  		<div>
  		{comments}
  		</div>

  	)

}
export default CommentsList