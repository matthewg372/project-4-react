import React from 'react'
import NewProfileForm from './NewProfileForm'
import UserProfile from './UserProfile'

class ProfileContainer extends React.Component{
	constructor(){
		super()
		this.state = {
			addProfile: [],
			idOfProfileToEdit: -1,
			profile: [],
			userId: '',
		}
	}
	componentDidMount() {
		this.setState({
			userId: this.props.userId,
		})
		this.getUsersProfile()
	}
	addProfile = async (profileToAdd) => {
		console.log(profileToAdd);
		try{
			const url = process.env.REACT_APP_API_URL + '/api/v1/profiles/'
			const createProfileResponse = await fetch(url,{
				credentials: 'include',
				method: 'POST',
				headers:{
					'content-type': 'application/json'
				},
				body: JSON.stringify(profileToAdd)
			})
			const createProfileJson = await createProfileResponse.json()
			console.log(createProfileResponse);
			if(createProfileResponse.status === 201){
				this.setState({
					addProfile:[...this.state.addProfile, createProfileJson]
				})
			}
			
		
		}catch(err){
			console.log(err)	
		}
	}
	getUsersProfile = async () => {
		try{
			const url = process.env.REACT_APP_API_URL + '/api/v1/profiles/user/' + this.props.userId
			console.log(url);
			const productsResponse = await fetch(url,{
				credentials: 'include'
			})
			const productsJson = await productsResponse.json()
			console.log(productsJson.data);
			this.setState({
				profile: productsJson.data,
			})
		}catch(err){
			console.log(err)	
		}
	}

	render(){
		console.log(this.state.profile);
		return(
			<div>
			<NewProfileForm addProfile={this.addProfile}/>
			<UserProfile profile={this.state.profile}/>
			</div>
		)
	}
}
export default ProfileContainer