import React from 'react'
import { Card , Feed, Button, Dropdown} from 'semantic-ui-react'

function ToDo(props){
	const ToDos = props.ToDos.map(ToDo => {
		return (
			<Card key={ToDo.id}>
				{
				props.loggedIn
				&&
				<Dropdown text='Options'>
				    <Dropdown.Menu>
				    <Dropdown.Item text='Delete' onClick={() => props.deleteToDo(ToDo.id)} />
				    <Dropdown.Item text='Edit' onClick={() => props.editToDo(ToDo.id)} />
				    </Dropdown.Menu>
			 	</Dropdown>	
				}
				<Card.Content >
					{ToDo.item}
	    		</Card.Content>
			</Card>
		)
	})
	const div = {
		marginLeft: "8%",
		marginTop: "2%",
		width: "200%"
	}
	return (
		<div className="segment" >
			<div style={div}>
				{ToDos}
			</div>
		</div>
	)
}

export default ToDo