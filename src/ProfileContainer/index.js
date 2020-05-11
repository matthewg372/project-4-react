import React from 'react'
import NewProfileForm from './NewProfileForm'
import UserProfile from './UserProfile'
import EditProfileModal from './EditProfileModal'
import UserPosts from '../PostContainer/UserPosts'



class ProfileContainer extends React.Component{
	constructor(){
		super()
		this.state = {
			addProfile: [],
			idOfProfileToEdit: -1,
			profile: [],
			userId: '',
			userHasProfile: 0,
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
			this.getUsersProfile()
			
		
		}catch(err){
			console.log(err)	
		}
	}
	editProfile = (editProfile) =>{
		this.setState({
			idOfProfileToEdit: editProfile
		})
	}
	updateProfile =  async (profileToUpdate) => {
		const url = process.env.REACT_APP_API_URL + '/api/v1/profiles/' + this.state.idOfProfileToEdit
		console.log(url);
		try{
			const updateProfileResponse = await fetch(url ,{
				credentials: 'include',
				method: 'PUT',
				body: JSON.stringify(profileToUpdate),
				headers:{
					'content-type': 'application/json'
				}
			})
			const updateProfileJson = await updateProfileResponse.json()
			console.log(updateProfileJson);
			if(updateProfileResponse.status === 200){
				const profile = this.state.profile
				const indexOfProfileBeingUpdated = profile.findIndex(profile => profile.id == this.state.idOfProfileToEdit)
				profile[indexOfProfileBeingUpdated] = updateProfileJson.data
				this.setState({
					profile: profile,
					idOfProfileToEdit: -1
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
			if(productsResponse.status === 200){
				this.setState({
					profile: productsJson.data,
					userHasProfile: 1
				})
			}
		}catch(err){
			console.log(err)	
		}
	}
	closeModal = () =>{
		this.setState({
			idOfProfileToEdit: -1
		})
	}

	render(){
		return(
			<div>
			<NewProfileForm addProfile={this.addProfile}/>
			<UserProfile 
			profile={this.state.profile}
			editProfile={this.editProfile}
			/>
			{
			this.state.idOfProfileToEdit !== -1
			&&
			<EditProfileModal
			updateProfile={this.updateProfile}
			editProfile={this.state.profile.find((profile) => profile.id === this.state.idOfProfileToEdit)}
			closeModal={this.closeModal}
			/>
			}
			</div>
		)
	}
}
export default ProfileContainer