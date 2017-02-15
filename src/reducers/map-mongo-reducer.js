import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  markers: [],
  isFetching: false,
  didInvalidate: false,
  errMessage:''
};

const mapMongoReducer = function (state = initialState, action) {
  switch (action.type) {
    case types.GET_MAP_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case types.GET_MAP_SUCCESS:
      return Object.assign({}, state, { markers: action.generateInitialMarkers(action.markers),
        isFetching: false,
        didInvalidate: false
      }); // все pure преобразования лучше делать в редюсере
    case types.GET_MAP_FAILTURE:
      return Object.assign({}, state, { errMessage: action.errMessage,
        isFetching: false,
        didInvalidate: true
      });
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
};

export default mapMongoReducer;
