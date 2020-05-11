import React from 'react'
import NewPostForm from './NewPostForm'
import UserPosts from './UserPosts'
import UserEditPostModal from './UserEditPostModal'
import {Button} from 'semantic-ui-react'

class PostContainer extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			posts: [],
			idOfPostToEdit: -1,
			getPosts: [],

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
			this.getPosts()
			
		
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
				getPosts: postsJson.data,
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
			this.getPosts()
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
		return (
			<React.Fragment>
				{
				this.props.loggedIn
				&&
				<NewPostForm
				addPost={this.addPost}
				getPosts={this.props.getPosts}
				/>
				}
				{
				this.props.loggedIn
				&&
				<UserPosts
				deletePost={this.deletePost}
				posts={this.state.getPosts}
				editPost={this.editPost}
				/>

				}
				{
				this.state.idOfPostToEdit !== -1
				&&					
				<UserEditPostModal
				updatePost={this.updatePost}
				editPost={this.state.posts.find((post) => post.id === this.state.idOfPostToEdit)}
				closeModal={this.closeModal}
				/>
				}
			</React.Fragment>


		)
	}



}

export default PostContainer