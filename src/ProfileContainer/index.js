import React from 'react'
import NewProfileForm from './NewProfileForm'

class ProfileContainer extends React.Component{
	constructor(){
		super()
		this.state = {
			profile: [],
			idOfProfileToEdit: -1,
		}
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
					profile:[...this.state.profile, createProfileJson]
				})
			}
			
		
		}catch(err){
			console.log(err)	
		}
	}

	render(){
		return(
			<NewProfileForm addProfile={this.addProfile}/>
		)
	}
}
export default ProfileContainer