import React from 'react'

class CommentContainer extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			

		}
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
			
		
		}catch(err){
			console.log(err)	
		}
	}	
	render(){
		return(
			<div>
				<NewCommentForm
				addComment={this.addComment}
				/>
			</div>
		)

	}

}
export default CommentContainer