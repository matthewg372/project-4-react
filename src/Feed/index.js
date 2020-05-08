import React from 'react'
import PostContainer from '../PostContainer'


function Feed(props){
	return(
		<div>
			<PostContainer loggedIn={props.loggedIn}/>
		</div>
	)
}

export default Feed