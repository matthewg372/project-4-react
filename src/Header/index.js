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
			<h1>AH</h1>
		<Menu>

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
			<Menu.Item onClick={props.logout}> Logout</Menu.Item>

			}
			{

			!props.loggedIn
			&&	
			<Menu.Item onClick={() => props.switchViews("login")}> login</Menu.Item>
			}

		</Menu>
		</div>



	)
}
export default Header