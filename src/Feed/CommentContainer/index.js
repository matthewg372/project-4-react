import React from 'react'
import NewCommentForm from './NewCommentForm'
import CommentsList from './CommentsList'
import EditCommentModal from './EditCommentModal'
import {  Checkbox,Header} from 'semantic-ui-react'

class CommentContainer extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			comments: [],
			idOfCommentToEdit: -1,
			collapsed: true

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
	editComment = (editComment) => {
		this.setState({
			idOfCommentToEdit: editComment
		})
	}
	updateComment =  async (commentToUpdate) => {
		const url = process.env.REACT_APP_API_URL + '/api/v1/comments/' + this.state.idOfCommentToEdit
		try{
			const updateCommentResponse = await fetch(url ,{
				credentials: 'include',
				method: 'PUT',
				body: JSON.stringify(commentToUpdate),
				headers:{
					'content-type': 'application/json'
				}
			})
			const updateCommentJson = await updateCommentResponse.json()
			if(updateCommentResponse.status === 200){
				const comments = this.state.comments
				const indexOfCommentBeingUpdated = comments.findIndex(comment => comment.id == this.state.idOfCommentToEdit)
				comments[indexOfCommentBeingUpdated] = updateCommentJson.data
				this.setState({
					comments: comments,
					idOfCommentToEdit: -1
				})
			}
			this.getComments()
		}catch(err){
			console.log(err)	
		}
	}
	deleteComment = async (commentToDelete) =>{
		try{
			const url = process.env.REACT_APP_API_URL + '/api/v1/comments/'
			const deleteCommentResponse = await fetch(url + commentToDelete,{
				credentials: 'include',
				method: 'DELETE'
			})
			const deletedCommentJson = await deleteCommentResponse.json()
			if(deleteCommentResponse.status === 200){
				this.setState({
					comments: this.state.comments.filter(comment => comment.id != commentToDelete)
				})
			}
		}catch(err){
			console.log(err)	
		}
	}
	closeModal = () =>{
		this.setState({
			idOfCommentToEdit: -1
		})
	}

  handleCheckbox = (e, { checked }) => this.setState({ collapsed: checked })
	render(){
		const { collapsed } = this.state
		return(
			<div>
				<NewCommentForm
				addComment={this.addComment}
				/>
				<br/>

				<CommentsList
				comments={this.state.comments}
				editComment={this.editComment}
				deleteComment={this.deleteComment}
				/>

				{
				this.state.idOfCommentToEdit !== -1
				&&
				<EditCommentModal
				updateComment={this.updateComment}
				closeModal={this.closeModal}
				editComment={this.state.comments.find((comment) => comment.id === this.state.idOfCommentToEdit)}
				/>
				}
			</div>
		)

	}

}
export default CommentContainer