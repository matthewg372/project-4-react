import React from 'react'
import NewProfileForm from './NewProfileForm'
import UserProfile from './UserProfile'
import EditProfileModal from './EditProfileModal'
import UserPosts from '../PostContainer/UserPosts'		    
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';



class ProfileContainer extends React.Component{
	constructor(){
		super()
		this.state = {
			addProfile: [],
			idOfProfileToEdit: -1,
			profile: [],
			userId: '',
			userHasProfile: 0,
			images: [],
		}
	}
	componentDidMount() {
		this.setState({
			userId: this.props.userId,
		})
		this.getUsersProfile()
	}
	addProfile = async (profileToAdd) => {
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
			if(createProfileResponse.status === 201){
				this.setState({
					addProfile:[...this.state.addProfile, createProfileJson],
					userHasProfile: 1
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
			const profilesResponse = await fetch(url,{
				credentials: 'include'
			})
			const profileJson = await profilesResponse.json()
			if(profilesResponse.status === 200){
				this.setState({
					profile: profileJson.data,
				})
			}
			if(profileJson.message === "Successfully found 1 profile"){
				this.setState({
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
		const div = {
			marginLeft: "35%",
			marginTop: "10%"
		}
		const div2 = {
			marginLeft: "15%",
			marginTop: "5%"
		}
		const header = {
			marginBottom: "3%"
		}
		return(
			<div>
			{
			this.state.userHasProfile == 0
			&&
			<div style={div}>
			<h1 style={header}>
			Make Your Profile Before Continuing!
			</h1>
			<div style={div2}>
			<NewProfileForm addProfile={this.addProfile}/>
			</div>
			</div>
			}
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