import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  markers: []
};

const geoReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_MO_SUCCESS:
      return Object.assign({}, state, { markers: action.markers });
  }

  return state;

}

export default geoReducer;
