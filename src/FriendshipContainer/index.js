import React from 'react'
import FriendList from './FriendList'

class FriendshipContainer extends React.Component{
	constructor(){
		super()
		this.state={
			foundFriend: [],
			friend: []
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
			this.setState({
				foundFriend: friendJson.data
			})
		}catch(err){
			console.log(err);
		}
		
	}
	addFriend = async (friendId) => {
		try{
			const url = process.env.REACT_APP_API_URL + '/api/v1/friendships/' + friendId
			const friendResponse = await fetch(url,{
				credentials: 'include',
				method: 'POST',
				headers:{
					'content-type': 'application/json'
				}
			})
			const friendJson = await friendResponse.json()
			this.setState({
				friend: friendJson.data
			})
		}catch(err){
			console.log(err)	
		}
	}
	render(){
		return(
			<div>
			<FriendList 
			friends={this.state.foundFriend}
			addFriend={this.addFriend}
			/>
			</div>


		)
	}


}

export default FriendshipContainer