import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import { geolocated } from "react-geolocated";

class MapContainer extends Component {
  constructor(props){
      super(props);

      this.state = {
          isOpen: false,
          openInfoWindowMarkerId: ''
      }

  }

  handleToggleOpen = (markerId) => {
    console.log("open");

      this.setState({
          isOpen: true,
          openInfoWindowMarkerId: markerId
      });
  }

  handleToggleClose = () => {
    console.log("close");
      this.setState({
          isOpen: false
      });
  }


  render() {

    const markers = this.props.meetings.map((feature, i) => {
      const latitude = feature.lat
      const longitude = feature.longitude
      
      return (
        <Marker
          title={feature.info}
          text={feature.info}
          key={i}
          onClick={this.handleToggleOpen}
          position={{
          lat: latitude,
          lng: longitude
        }}>
          </Marker>
      )
    })

    const containerStyle = { 
    width: '900px',
    height: '300px',
    marginLeft: '18%',
    marginTop: '5%'
    }
    console.log(this.state.isOpen);
      return (
        <Map 
        containerStyle={containerStyle} 
        google={this.props.google} 
        zoom={10}
        initialCenter={{
        lat: 42.005299,
        lng: -87.6675072
        }}
        >
        {markers}

        <InfoWindow open={true} onClose={this.handleToggleClose}>
            <div>
              <h1>idk</h1>
            </div>
        </InfoWindow>

        </Map>

      );    
    }
  }
export default GoogleApiWrapper({
apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer)