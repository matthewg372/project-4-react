import React from 'react'
import { Container, Divider, Image, Button} from 'semantic-ui-react'

function UserProfile(props){
	const profile = props.profile.map(profile => {
		return (
  <div key={profile.id}>
    <Image src={profile.images} size='medium' circular />
    <Container textAlign='justified'>
      	<b>{profile.first_name} {profile.last_name}</b>
      	<Divider />
      	<p>
      	Days Sober: {profile.days_sober}
      	</p>
      	Birthday: {profile.date_of_birth}
      	<p>
      	</p>
      	<p>
      	sponsor: {profile.sponsor}
     	 </p>
      	<Button onClick={() => props.editProfile(profile.id)}>
		Edit 
		</Button>

    </Container>
  </div>
		)
	})

	return(
		<div>
			{profile}
		</div>

	)
}

export default UserProfile