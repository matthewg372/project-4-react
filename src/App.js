import React from 'react';
import LoginRegisterForm from './LoginRegisterForm'
import ProfileContainer from './ProfileContainer'
import Feed from './Feed'
import Header from './Header'
import SideBar from './SideBar'
import FriendshipContainer from './FriendshipContainer'
import MeetingContainer from './MeetingContainer'
import ToDoListContainer from './ToDoListContainer'
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      loggedIn: false,
      loggedInUserEmail: '',
      loggedInUserId: '',
      views: 'login'
    }
  }

  register = async(registerInfo) =>{
    const url = process.env.REACT_APP_API_URL + "/api/v1/users/register"
    try{ 
      const registerResponse = await fetch(url, {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(registerInfo),
        headers:{
          'content-type': 'application/json'
        }
      })
        const registerJson = await registerResponse.json()
        if(registerResponse.status === 201){
          this.setState({
            loggedIn: true,
            loggedInUserEmail: registerJson.data.email,
            loggedInUserId: registerJson.data.id,
            views: "myProfile"

        })
      }
      
    
    }catch(err){
      console.log(err)  
    }
  }
    login = async(loginInfo) =>{
    const url = process.env.REACT_APP_API_URL + "/api/v1/users/login" 
    try{
      const loginResponse = await fetch(url, {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(loginInfo),
        headers:{
          'content-type': 'application/json'
        }
      })
        const loginJson = await loginResponse.json()
        if(loginResponse.status === 200){
          this.setState({
            loggedIn: true,
            loggedInUserEmail: loginJson.data.email,
            loggedInUserId: loginJson.data.id,
            views: "myProfile"
          })
        }
    }catch(err){
      console.log(err)  
    }
  }
    logout = async () =>{
    try{
      const url = process.env.REACT_APP_API_URL + "/api/v1/users/logout"
      const logoutResponse = await fetch(url,{
        credentials: 'include'
      })
      const logoutJson = await logoutResponse.json()
      if(logoutResponse.status === 200){
        this.setState({
          loggedIn: false, 
          loggedInUserEmail: '',
          views: "login"
        })

      }
    
    }catch(err){
      console.log(err)  
    }
  }
  switchViews = (nameOfView) => {
    this.setState({
      views: nameOfView,
    })
    
  }

  render(){
    return (
      <div className="App">
      <Header
      logout={this.logout}
      loggedIn={this.state.loggedIn}
      switchViews={this.switchViews}
      />
      {
      this.state.views === "ToDo"
      &&
      <ToDoListContainer
      userId={this.state.loggedInUserId}
      loggedIn={this.state.loggedIn}
      />
      }
      {
      this.state.views === "myProfile"
      &&
      <ProfileContainer
      userId={this.state.loggedInUserId}
      />
      }
      {
      this.state.views === "login"
      &&
      <LoginRegisterForm
      register={this.register}
      login={this.login}
      />
      }
      {
      this.state.views === "feed"
      &&
      <Feed
      userId={this.state.loggedInUserId}
      loggedIn={this.state.loggedIn}
      />
      }
      {
      this.state.views === "FindFriends"
      &&
      <FriendshipContainer/>
      }
      {
      this.state.views === "meetings"
      &&
      <MeetingContainer
      loggedIn={this.state.loggedIn}
      />
      }
      </div>
    );

  }
}

export default App;
