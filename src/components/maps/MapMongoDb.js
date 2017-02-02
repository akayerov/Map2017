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
import store from '../../store' // !!!!!!!!!!!!!! бессмысленная строка. ты не получишь значения стора так.
import { getMOSuccess, toggleMarkerInfo } from '../../actions/geo-actions'; // import our action to fetch markers


const ClosureListenersExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={new google.maps.LatLng(57.63, 39.87)}
  >
    {props.markers.map((marker, index) => {
      const onClick = () => props.onMarkerClick(marker, index); // передадим ка индекс в функцию (почему бы нет)
      const onCloseClick = () => props.onCloseClick(marker, index);
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
    // this.state = {
    //   markers: generateInitialMarkers(),
    // };
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.toggleMarker = this.toggleMarker.bind(this);
    this.icon = getIcon();
  }

  componentDidMount() {
    this.props.getMarkers(); // получаем маркеры когда компонент встроен, так в документации рекомендуют
  }

  handleMarkerClick(targetMarker, targetIndex) {
    // this.setState({
    //     markers: this.state.markers.map(marker => {
    //     if (marker === targetMarker) {
    //       return {
    //         ...marker,
    //         showInfo: true,
    //       };
    //     }
    //     return marker;
    //   }),
    // });
    this.toggleMarker(targetIndex, true);
  }

  handleCloseClick(targetMarker, targetIndex) {
    // this.setState({
    //   markers: this.state.markers.map(marker => {
    //     if (marker === targetMarker) {
    //       return {
    //         ...marker,
    //         showInfo: false,
    //       };
    //     }
    //     return marker;
    //   }),
    // });
    this.toggleMarker(targetIndex, false);
  }

  toggleMarker(index, bool) {
    this.props.toggleMarkerInfo(index, bool);
  }

  render() {
    const { markers } = this.props; // берем маркеры из props
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
        markers={markers} // вставляем
        icon = {this.icon}
      />
    );
  }
}

export default ClosureListenersExample;


const mapStateToProps = function(store) {
  return {
    // markers: store.geoState.markers !!!!!!!!!! geoState ветви не существует в сторе.
    markers: store.markerState.markers || [] // видем что в редюсерах ветка названа markerState, берем маркеры отсюда, если значения нет – по дефолту пустой массив
  };
};

const mapDispatchToActions = { 
  getMarkers: getMOSuccess, // мы связываем getMOSuccess и диспатчер,
  toggleMarkerInfo: toggleMarkerInfo // новая функция показа инфо
 } 
// и передадим в props эту фунцию под именем getMarkers,

export default connect(
  mapStateToProps,
  mapDispatchToActions // для этого передаем объект в коннект вторым аргументом
)(ClosureListenersExample);

