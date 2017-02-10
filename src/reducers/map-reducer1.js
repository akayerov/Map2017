import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  markers: [],
  isFetching: false,
  didInvalidate: false
};

function generateInitialMarkers(moMarkerObj) {
//  console.log('MongoMap:generateInitialMarkers');
//  console.log(moMarkerObj);
  const markers = [];
  for (let i = 0; i < moMarkerObj['данные'].length; i++) {
    const position = new google.maps.LatLng(
      Number( moMarkerObj['данные'][i]['Широта']),
      Number( moMarkerObj['данные'][i]['Долгота'])
    );
    markers.push({
      position,
      title:   moMarkerObj['данные'][i]['МО'],
      content: moMarkerObj['данные'][i]['Тип МО'] ,
      showInfo: false,
    });
  }
//  console.log('MongoMap:generateInitialMarkers:Result');
//  console.log(markers);
  return markers;
}

const mapReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_MAP_SUCCESS:
      return Object.assign({}, state, { markers: generateInitialMarkers(action.markers) }); // все pure преобразования лучше делать в редюсере
    case 'TOGGLE_MAP_MARKER':
      return Object.assign({}, state, {
        markers: [].concat(
          state.markers.slice(0, action.payload.index),
          Object.assign({}, state.markers[action.payload.index], { showInfo: action.payload.bool }),
          state.markers.slice(action.payload.index + 1)
        )
      });
    default:
      return state;
  }

  return state;

}

export default mapReducer;
