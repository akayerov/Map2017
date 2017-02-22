// Стиль карты принудительно учтианавливается
// при наличии параметра styleMap (в router.js) и в этом случае не может
// быть изменен
// В отсутсвии параметра styleMap стиль выбирается в зависимости от
// установки темы Material UI в хранилище

import { default as React,  Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from '../../lib';
import { connect } from 'react-redux';
import { fetchMap, toggleMarkerInfo } from '../../actions/map-mongo-actions'; // import our action to fetch markers
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';

import darkStyleMap from '../../constants/fancyMapStyles.json';

const MapFromMongoReduxGoogleMap = withGoogleMap(props => (
  <MuiThemeProvider>
    <div>
      <GoogleMap
        defaultZoom={12}
        defaultCenter={new google.maps.LatLng(57.63, 39.87)}
        options={{ styles: props.styleMap }}
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
              icon = {marker.icon}
            >
              {marker.showInfo && (
                <InfoWindow onCloseClick={onCloseClick}>
                  {props.infoWindow(marker) }
                </InfoWindow>
              )}
            </Marker>
          );
        })}
      </GoogleMap>
      { props.isFetching === true  &&
      <div className='center'>
        <CircularProgress size={60} thickness={7} />
      </div>
  }
      {props.didInvalidate  === true &&
      <div className='centerDialog'>
        <p>{props.errMessage}</p>
      </div>
  }
    </div>
  </MuiThemeProvider>
));

class MapFromMongoRedux extends Component {
  constructor(props) {
  //  console.log('Constructor');
    super(props);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.toggleMarker = this.toggleMarker.bind(this);
  }

  componentDidMount() {
//    console.log('componentDidMount');
    // передаю код карты, функцию обработки полей данных
    this.props.getMarkers(Number(this.props.idMap), this.props.getMarker); // получаем маркеры когда компонент встроен, так в документации рекомендуют
  }

  componentWillMount() {
//    console.log('componentWillUnmount');
  }
  componentWillUnmount() {
//    console.log('componentWillMount');
  }
  componentWillReceiveProps(newProps) {
/*
    console.log('componentWillReceiveProps');
    console.log(this.props.route.idMap);
    console.log(newProps.route.idMap);
*/
    // обновляю данные, когда карта меняется при смонтрированном компоненте
    if (this.props.idMap != newProps.idMap)      {
      this.props.getMarkers(Number(newProps.idMap), newProps.getMarker);
    }
  }

  shouldComponentUpdate(newProps, newState) {
  //  console.log('shouldComponentUpdate');
    return true;
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
    const { markers, isFetching, didInvalidate, errMessage, openL, openR, toggledTheme } = this.props; // берем маркеры из props
//    let proc_brightness = 100;
    let _proc = 0;

    if (openL == true || openR == true)       {
//      proc_brightness = 50;
      _proc = 100;
    }
    let styleMap = null;

    if (this.props.styleMap != undefined)      {
      styleMap = this.props.styleMap;
    }    else if (toggledTheme === false)      {
      styleMap = darkStyleMap;
    }

    const styles = {
      height: '900px',
  //    filter: `brightness(${proc_brightness}%)`
      filter: `grayscale(${_proc}%)`
    };

    return (
      <MapFromMongoReduxGoogleMap
        containerElement={
          <div style={styles} />
        }
        mapElement={
          <div style={{ height: '100%' }} />
        }
        onMarkerClick={this.handleMarkerClick}
        onCloseClick={this.handleCloseClick}
        markers={markers} // вставляем
        isFetching = {isFetching}
        didInvalidate = {didInvalidate}
        errMessage = {errMessage}
        infoWindow = {this.props.infoWindow}
        styleMap = {styleMap}
      />
    );
  }
}

const mapStateToProps = function (store) {
  return {
    markers: store.mapState.markers || [], // видем что в редюсерах ветка названа markerState, берем маркеры отсюда
    isFetching: store.mapState.isFetching,
    didInvalidate: store.mapState.didInvalidate,
    errMessage: store.mapState.errMessage,
    openL: store.sliderState.openL,
    openR: store.sliderState.openR,
    toggledTheme: store.sliderState.toggledTheme
  };
};

const mapDispatchToActions = {
  getMarkers: fetchMap, // мы связываем getMOSuccess и диспатчер,
  toggleMarkerInfo // новая функция показа инфо
};
// и передадим в props эту фунцию под именем getMarkers,

export default connect(
  mapStateToProps,
  mapDispatchToActions // для этого передаем объект в коннект вторым аргументом
)(MapFromMongoRedux);
