import React from 'react'
import FriendList from './FriendList'

class FriendshipContainer extends React.Component{
	constructor(){
		super()
		this.state={
			foundFriend: []
		}
	}
	componentDidMount(){
		this.findFriends()
	}
	findFriends = async () => {
		try{
			const url = process.env.REACT_APP_API_URL +	'/api/v1/profiles/all'
			const friendResponse = await fetch(url,{
				credentials: 'include'
			})
			const friendJson = await friendResponse.json()
			console.log("-----", friendJson);
			this.setState({
				foundFriend: friendJson.data
			})
		}catch(err){
			console.log(err);
		}
		
	}
	render(){
		return(
			<div>
			<FriendList friends={this.state.foundFriend}/>
			</div>


		)
	}


}

export default FriendshipContainer