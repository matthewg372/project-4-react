import React from 'react';
import './App.css';
import LoginRegisterForm from './LoginRegisterForm'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      loggedIn: false,
      loggedInUserEmail: ''
    }
  }
  register = async(registerInfo) =>{
    const url = process.env.REACT_APP_API_URL + "/api/v1/users/register"
    try{
      const registerResponse = await fetch(url,{
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
          loggedInUserEmail:registerJson.data.email,

        })
      }
    
    }catch(err){
      console.log(err)  
    }
  }

  render(){
    return (
      <div className="App">
      <LoginRegisterForm/>
      </div>
    );

  }
}

export default App;
