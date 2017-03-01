/* global google */
import {
  default as React,
  Component
} from 'react';

import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from '../../lib';

const DirectionsExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={new google.maps.LatLng(57.1842, 39.4014)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class DirectionsExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: new google.maps.LatLng(57.419342, 39.072179),
      destination: new google.maps.LatLng(57.1842, 39.4014),
      directions: null
    };
    this.isUnmounted = false;
  }
// конец замены

  componentDidMount() {
    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route({
      origin: this.state.origin,
      destination: this.state.destination,
      travelMode: google.maps.TravelMode.DRIVING
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result
        });
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  }

  render() {
    return (
      <DirectionsExampleGoogleMap
        containerElement={
          <div style={{ height: '900px' }} />
        }
        mapElement={
          <div style={{ height: '100%' }} />
        }
        center={this.state.origin}
        directions={this.state.directions}
      />
    );
  }
}
