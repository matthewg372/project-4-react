import React from 'react'
import { Comment , Header, Button, Form, Dropdown} from 'semantic-ui-react'
function CommentsList(props){

	const comments = props.comments.map(comment => {
		console.log(comment.user);
		return (
			<Comment.Group key={comment.id}>
				<Dropdown text='Edit/Delete'>
				    <Dropdown.Menu>
					<Dropdown.Item text='Delete' onClick={() => props.deleteComment(comment.id)} />
				    <Dropdown.Item text='Edit' onClick={() => props.editComment(comment.id)} />
				    </Dropdown.Menu>
			 	</Dropdown>
			<Comment>
			  <Comment.Avatar src={comment.user.images} />
			  <Comment.Content>
			    <Comment.Author as='a'>{comment.user.username}</Comment.Author>
			    <Comment.Metadata>
			      <div>{comment.date}</div>
			    </Comment.Metadata>
			    <Comment.Text>{comment.bio}</Comment.Text>
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