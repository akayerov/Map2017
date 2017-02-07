import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  counter: {},
  isFetching: false,
  didInvalidate: false,
};

const counterReducer = function(state = initialState, action) {

  switch(action.type) {
    case types.GET_COUNTER_REQUEST:
      return Object.assign({}, state, {
              isFetching: true,
              didInvalidate: false
            });
    case types.GET_COUNTER_SUCCESS:
      return Object.assign({}, state, { counter: action.counter,
              isFetching: false,
              didInvalidate: false
           });
      case types.GET_COUNTER_FAILTURE:
        return Object.assign({}, state, {
              isFetching: false,
              didInvalidate: true
        });
    }
    return state;

}
export default counterReducer;
