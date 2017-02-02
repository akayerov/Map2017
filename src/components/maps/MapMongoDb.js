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

import mоMarker from "../../../public/data/moYarMap.json";

import { connect } from 'react-redux';
import store from '../../store';


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


  console.log('generateInitialMarkers');
  console.log(mоMarker);


  const markers = [];
  let nord = 0.0;
  let east = 0.0;

  for (let i = 0; i < mоMarker.length; i++) {
    const position = new google.maps.LatLng(
      Number(mоMarker[i].Широта),
      Number(mоMarker[i].Долгота)
    );
    markers.push({
      position,
      title:   mоMarker[i]['МО'],
      content: mоMarker[i]['Регион'] + ' ' +  mоMarker[i]['Тип МО'],
      showInfo: false,
    });
  }
  return markers;
}

function getIcon() {
  return 'img/hospital.png';
}

//export default class ClosureListenersExample extends Component {
class ClosureListenersExample extends Component {
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

export default ClosureListenersExample;

/*
const mapStateToProps = function(store) {
  return {
    markers: store.geoState.markers
  };
};

export default connect(mapStateToProps)(ClosureListenersExample);
*/
