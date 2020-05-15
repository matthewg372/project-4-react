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
	
	render(){
		return(
			<div>
				<PostContainer 
				loggedIn={this.props.loggedIn}
				userId={this.props.userId}
				/>
			</div>
		)

	}

}
export default Feed