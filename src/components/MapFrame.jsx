import React, { Component } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../App.css';

var myIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/CodingGarden/guest-map/303f4dbab7595a80d64e03e81c7d8e4199667258/client/src/user_location.svg',
    iconSize: [30, 75],
    iconAnchor: [12.5, 41],
    popupAnchor: [2, -20]
  });

export default class MapFrame extends Component {
    state = { 
        location: {
            lat: 51.505,
            lng: -0.09,
            },
            zoom: 3,
     } 

     componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
          this.setState({
            location: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            },
            haveUsersLocation: true,
            zoom: 13
          });
        }, () => {
          console.log('no location entered');
          fetch('https://ipapi.co/json')
            .then(res => res.json())
            .then(location => {
              this.setState({
                location: {
                  lat: location.latitude,
                  lng: location.longitude
                },
                haveUsersLocation: true,
                zoom: 13
              });
          });
        });    
      }

    render() { 
        const position = [this.state.location.lat, this.state.location.lng]
        return (
            <MapContainer center={position} zoom={this.state.zoom} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {this.state.haveUsersLocation ? 
                    <Marker 
                        position={position}
                        icon={myIcon}>
                    <Popup>You Are Here! <br /></Popup>
        </Marker> :''
        }
            </MapContainer>
        );
    }
}