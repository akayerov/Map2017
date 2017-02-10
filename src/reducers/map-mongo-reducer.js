import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  markers: [],
  isFetching: false,
  didInvalidate: false,
};

function generateInitialMarkers(moMarker) {
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

const mapReducer = function(state = initialState, action) {

  switch(action.type) {
    case types.GET_MAP_REQUEST:
      return Object.assign({}, state, {
              isFetching: true,
              didInvalidate: false
    });
    case types.GET_MAP_SUCCESS:
      return Object.assign({}, state,  { markers: generateInitialMarkers(action.markers),
        isFetching: false,
        didInvalidate: false

    });
    case types.GET_COUNTER_FAILTURE:
      return Object.assign({}, state, { errMessage: action.errMessage,
            isFetching: false,
            didInvalidate: true
    });
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
export default mapMongoReducer;
