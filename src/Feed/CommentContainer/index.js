import React from 'react'
import NewCommentForm from './NewCommentForm'
import CommentsList from './CommentsList'
import { Header} from 'semantic-ui-react'

class CommentContainer extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			comments: []

		}
	}
	componentDidMount(){
		this.getComments()
	}
	addComment = async (commentToAdd) => {
		try{
			const url = process.env.REACT_APP_API_URL + '/api/v1/comments/' + this.props.postId
			const createCommentResponse = await fetch(url,{
				credentials: 'include',
				method: 'POST',
				headers:{
					'content-type': 'application/json'
				},
				body: JSON.stringify(commentToAdd)
			})
			const createCommentJson = await createCommentResponse.json()
			if(createCommentResponse.status === 201){
				this.setState({
					comments:[...this.state.comments, createCommentJson]
				})
			}
			this.getComments()
			
		
		}catch(err){
			console.log(err)	
		}
	}
	getComments = async () => {
		try{
			const url = process.env.REACT_APP_API_URL + '/api/v1/comments/' + this.props.postId
			const commentsResponse = await fetch(url)
			const commentsJson = await commentsResponse.json()
			this.setState({
				comments: commentsJson.data
			})
		}catch(err){
			console.log(err)	
		}
	}	
	render(){
		console.log(this.props.postId);
		return(
			<div>
				<Header as='h3' dividing>
			  		Comments
				</Header>
				<NewCommentForm
				addComment={this.addComment}
				/>
				<CommentsList
				addComment={this.addComment}
				comments={this.state.comments}
				/>
			</div>
		)

	}

}
export default CommentContainer