import React from 'react'
import {Menu} from 'semantic-ui-react'


function Header(props){
	const divStyle = {
	    textAlign: "center",
	    padding: "10px",
	    color: "white",
	    backgroundColor: "black"
	  }
	return(
		<div style={divStyle}>
			<h1>AN</h1>
		<Menu >
			<Menu.Item name="meeting" onClick={() => props.switchViews("meetings")}>
			Meetings
			</Menu.Item>
			{
			props.loggedIn
			&&	
			<Menu.Item 
			name="My Profile"
			onClick={() => props.switchViews("myProfile")}>
			My Profile
			</Menu.Item>
			}
			
			{
			props.loggedIn
			&&
			<Menu.Item 
			name="feed"
			onClick={() => props.switchViews("feed")}>
			Feed
			</Menu.Item>
			}
			

			{
			props.loggedIn
			&&
			<Menu.Item onClick={() => props.switchViews("FindFriends")}>Find Friends</Menu.Item>
			}

			{
			props.loggedIn
			&&	
			<Menu.Item onClick={() => props.switchViews("ToDo")}> To-Do List</Menu.Item>
			}
			{
			props.loggedIn
			&&	
			<Menu.Item onClick={props.logout}> Logout</Menu.Item>
			}

			{
			!props.loggedIn
			&&	
			<Menu.Item onClick={() => props.switchViews("AA")}>A.A. Info</Menu.Item>
			}
			{
			!props.loggedIn
			&&	
			<Menu.Item onClick={() => props.switchViews("login")}> Login</Menu.Item>
			}

		</Menu>

		</div>



	)
}
export default Header