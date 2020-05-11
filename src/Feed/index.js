import React from 'react'
import PostContainer from '../PostContainer'


class Feed extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			posts: [],
			idOfPostToEdit: -1

		}
	}
	componentDidMount() {
		this.getPosts()
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
	getPosts = async () => {
		try{
			const url = process.env.REACT_APP_API_URL + '/api/v1/posts/' + this.props.userId
			const postsResponse = await fetch(url,{
				credentials: 'include'
			})
			const postsJson = await postsResponse.json()
			console.log(postsJson.data);
			this.setState({
				posts: postsJson.data,
			})
		}catch(err){
			console.log(err)	
		}

	}
	editPost = (editPost) => {
		this.setState({
			idOfPostToEdit: editPost

		})
	}
	deletePost = async (postToDelete) =>{
		try{
			const url = process.env.REACT_APP_API_URL + '/api/v1/posts/'
			const deletePostResponse = await fetch(url + postToDelete,{
				credentials: 'include',
				method: 'DELETE'
			})
			const deletedPostJson = await deletePostResponse.json()
			if(deletePostResponse.status === 200){
				this.setState({
					posts: this.state.posts.filter(post => post.id != postToDelete)
				})
			}
		}catch(err){
			console.log(err)	
		}
	}
	updatePost =  async (postToUpdate) => {
		const url = process.env.REACT_APP_API_URL + '/api/v1/posts/' + this.state.idOfPostToEdit
		try{
			const updatePostResponse = await fetch(url ,{
				credentials: 'include',
				method: 'PUT',
				body: JSON.stringify(postToUpdate),
				headers:{
					'content-type': 'application/json'
				}
			})
			const updatePostJson = await updatePostResponse.json()
			if(updatePostResponse.status === 200){
				const posts = this.state.posts
				const indexOfPostBeingUpdated = posts.findIndex(post => post.id == this.state.idOfPostToEdit)
				posts[indexOfPostBeingUpdated] = updatePostJson.data
				this.setState({
					posts: posts,
					idOfPostToEdit: -1
				})
			}
		}catch(err){
			console.log(err)	
		}
	}
	closeModal = () =>{
		this.setState({
			idOfPostToEdit: -1
		})
	}
	render(){
		return(
			<div>
				<PostContainer 
				loggedIn={this.props.loggedIn}
				userId={this.props.userId}
				getPosts={this.getPosts}
				/>

			</div>
		)

	}

}
export default Feed