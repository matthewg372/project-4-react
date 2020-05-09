import React from 'react'
import {Button} from 'semantic-ui-react'
import NewPostForm from './NewPostForm'

class PostContainer extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			posts: [],
			idOfPostToEdit: -1,
			userId: ''

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
	// deleteProduct = async (productToDelete) =>{
	// 	try{
	// 		const url = process.env.REACT_APP_API_URL + '/api/v1/products/'
	// 		const deleteProductResponse = await fetch(url + productToDelete,{
	// 			credentials: 'include',
	// 			method: 'DELETE'
	// 		})
	// 		const deletedProductJson = await deleteProductResponse.json()
	// 		if(deleteProductResponse.status === 200){
	// 			this.setState({
	// 				products: this.state.products.filter(product => product.id != productToDelete)
	// 			})
	// 		}
	// 	}catch(err){
	// 		console.log(err)	
	// 	}
	// }
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
			</React.Fragment>


		)
	}



}

export default PostContainer