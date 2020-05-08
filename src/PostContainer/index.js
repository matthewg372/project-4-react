import React from 'react'
import {Button} from 'semantic-ui-react'
import NewPostForm from './NewPostForm'

class PostContainer extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			posts: [],

		}
	}
	componentDidMount(){
	}
	addPost = async (postToAdd) => {
		try{
			const url = process.env.REACT_APP_API_URL + '/api/v1/posts/'
			const createPostResponse = await fetch(url,{
				credentials: 'include',
				method: 'POST',
				headers:{
					'content-type': 'application/json'
				},
				body: JSON.stringify(postToAdd)
			})
			const createPostJson = await createPostResponse.json()
			if(createPostResponse.status === 200){
				this.setState({
					posts:[...this.state.posts, createPostJson]
				})
			}
			
		
		}catch(err){
			console.log(err)	
		}
	}
	editPost = (editPost) => {
		this.setState({
			idOfPostToEdit: editPost

		})
	}
	render(){
		return (
			<React.Fragment>
				{
				this.props.loggedIn
				&&
				<NewPostForm
				addPost={this.addPost}
				/>
				}
			</React.Fragment>


		)
	}



}

export default PostContainer