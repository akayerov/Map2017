/* global google */
import {
  default as React,
  Component,
} from "react";

import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "../../lib";

import mоMarker from "../../data/mo.json";
//var mоMarker = require('../../data/mo.json');
//console.log(mоMarker);

const ClosureListenersExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={new google.maps.LatLng(57.63, 39.87)}
  >
    {props.markers.map((marker, index) => {
      const onClick = () => props.onMarkerClick(marker);
      const onCloseClick = () => props.onCloseClick(marker);
      return (
        <Marker
          key={index}
          position={marker.position}
          title={marker.title}
          onClick={onClick}
          icon = {'img/hospital.png'}
        >
          {marker.showInfo && (
            <InfoWindow onCloseClick={onCloseClick}>
              <div>
                <strong>{marker.content}</strong>
                <br />
                <em>The contents of this InfoWindow are actually ReactElements.</em>
              </div>
            </InfoWindow>
          )}
        </Marker>
      );
    })}
  </GoogleMap>
));

function generateInitialMarkers() {

  const southWest = new google.maps.LatLng(57.65, 39.77);
  const northEast = new google.maps.LatLng(57.70, 39.85);

  const lngSpan = northEast.lng() - southWest.lng();
  const latSpan = northEast.lat() - southWest.lat();

  console.log('generateInitialMarkers');
  console.log(mоMarker);



  const markers = [];
  for (let i = 0; i < mоMarker.length; i++) {
    const position = new google.maps.LatLng(
      mоMarker[i].position[0],
      mоMarker[i].position[1]
    );
    markers.push({
      position,
      title:   mоMarker[i].title,
      content: mоMarker[i].content,
      showInfo: false,
    });
  }

  return markers;
}

function getIcon() {
  return 'img/hospital.png';
}

/*
 * https://developers.google.com/maps/documentation/javascript/examples/event-closure
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class ClosureListenersExample extends Component {
/*
  state = {
    markers: generateInitialMarkers(),
  };
handleMarkerClick = this.handleMarkerClick.bind(this);
handleCloseClick = this.handleCloseClick.bind(this);
*/
  constructor(props) {
    super(props);
    this.state = {
      markers: generateInitialMarkers(),
    };
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.icon = getIcon();
  }

  handleMarkerClick(targetMarker) {
//    debugger
    this.setState({
        markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: true,
          };
        }
        return marker;
      }),
    });
  }

  handleCloseClick(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: false,
          };
        }
        return marker;
      }),
    });
  }

  render() {
    return (
      <ClosureListenersExampleGoogleMap
        containerElement={
          <div style={{ height: `900px` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
        onMarkerClick={this.handleMarkerClick}
        onCloseClick={this.handleCloseClick}
        markers={this.state.markers}
        icon = {this.icon}
      />
    );
  }
}
