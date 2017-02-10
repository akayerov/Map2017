/* global google */
import { default as React,  Component } from "react";
import { withGoogleMap, GoogleMap, Marker, InfoWindow} from "../../lib";
import { connect } from 'react-redux';
import store from '../../store' // !!!!!!!!!!!!!! бессмысленная строка. ты не получишь значения стора так.
import { fetchMap, toggleMarkerInfo } from '../../actions/map-mongo-actions'; // import our action to fetch markers


const MapFromJsonReduxGoogleMap = withGoogleMap(props => (
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
          icon = {props.icon}
        >
          {marker.showInfo && (
            <InfoWindow onCloseClick={onCloseClick}>
              <div>
                <strong>{marker.content}</strong>
                <br />
                <em>Доп тескт this InfoWindow are actually ReactElements.</em>
              </div>
            </InfoWindow>
          )}
        </Marker>
      );
    })}
  </GoogleMap>
));

function getIcon() {
  return 'img/hospital.png';
}

class MapFromJsonRedux extends Component {
  constructor(props) {
    super(props);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.toggleMarker = this.toggleMarker.bind(this);
    this.icon = getIcon();
  }

  componentDidMount() {
    this.props.getMarkers(1); // получаем маркеры когда компонент встроен, так в документации рекомендуют
  }

  handleMarkerClick(targetMarker, targetIndex) {
    this.toggleMarker(targetIndex, true);
  }

  handleCloseClick(targetMarker, targetIndex) {
    this.toggleMarker(targetIndex, false);
  }

  toggleMarker(index, bool) {
    this.props.toggleMarkerInfo(index, bool);
  }

  render() {
    const { markers } = this.props; // берем маркеры из props
    const styles = {
       height: `900px`,
       filter: 'brightness(100%)',
    };

    return (
      <MapFromJsonReduxGoogleMap
        containerElement={
          <div style={ styles } />
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

const mapStateToProps = function(store) {
  return {
//    markers: store.markerState.markers || [] // видем что в редюсерах ветка названа markerState, берем маркеры отсюда, если значения нет – по дефолту пустой массив
    markers: store.mapState.markers || [] // видем что в редюсерах ветка названа markerState, берем маркеры отсюда, если значения нет – по дефолту пустой массив
  };
};

const mapDispatchToActions = {
  getMarkers: fetchMap, // мы связываем getMOSuccess и диспатчер,
  toggleMarkerInfo: toggleMarkerInfo // новая функция показа инфо
 }
// и передадим в props эту фунцию под именем getMarkers,

export default connect(
  mapStateToProps,
  mapDispatchToActions // для этого передаем объект в коннект вторым аргументом
)(MapFromJsonRedux);
