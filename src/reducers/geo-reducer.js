import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  markers: []
};

function generateInitialMarkers(moMarker) {


  console.log('generateInitialMarkers');
  console.log(moMarker);


  const markers = [];
  let nord = 0.0;
  let east = 0.0;

  for (let i = 0; i < moMarker.length; i++) {
    const position = new google.maps.LatLng(
      Number(moMarker[i].Широта),
      Number(moMarker[i].Долгота)
    );
    markers.push({
      position,
      title:   moMarker[i]['МО'],
      content: moMarker[i]['Регион'] + ' ' +  moMarker[i]['Тип МО'],
      showInfo: false,
    });
  }
  return markers;
}

const geoReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_MO_SUCCESS:
      return Object.assign({}, state, { markers: generateInitialMarkers(action.markers) }); // все pure преобразования лучше делать в редюсере
    case 'TOGGLE_MARKER':
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

export default geoReducer;
