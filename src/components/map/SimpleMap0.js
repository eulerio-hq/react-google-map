import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import {GOOGLE_API_KEY,MAP_OPTIONS,ZOOM,START_LAT,START_LONG} from "../../Constants.js";
import {simpleMapService} from "../../services/SimpleMapService.js";
import Marker from "../marker/Marker.js";

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
    };
  }

  async componentDidMount() {
    let newState  = await simpleMapService.getLandmarks()
    this.setState(newState);
    this.setState({ showAddModal: false });
  }

  onPinClick = (key) => {
    const newState = Object.assign({}, this.state);
    newState.places.forEach(place => {
        if (place.id === key) {
          place.show = !place.show
        }
        else{
          place.show = false
        }

      });
      this.setState(newState);
  };

  render() {
    const { places } = this.state;
    let startLat = START_LAT;
    let startLong = START_LONG;
    if(places.length > 0){
      startLat = places[0].location.lat
      startLong = places[0].location.long
    }
        return (
        <>
          {(
            <div style={{ height: "100vh", width: "100%"}}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
              center={{lat:startLat,lng:startLong}}
              options={MAP_OPTIONS}
              zoom={ZOOM}
              onChildClick={this.onPinClick}
            >
            {places.map((place) => (
                <Marker
                  key={place.id}
                  lat={place.location.lat}
                  lng={place.location.long}
                  name={place.name}
                  hours={place.hours}
                  show={place.show}
                />
              ))}

            </GoogleMapReact>
          </div>
          )}
        </>
      );
  }
}

export default SimpleMap;
