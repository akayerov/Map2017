import * as types from '../actions/action-types';

const initialState = {
  openL: false, openR: false
};

const sliderReducer = function (state = initialState, action) {
  switch (action.type) {
    case types.TOOGLE_LEFT_SLIDER:
      return Object.assign({}, state, {
        openL: !state.openL
      });
    case types.TOOGLE_RIGHT_SLIDER:
      return Object.assign({}, state, {
        openR: !state.openR
      });
    default:
      return state;
  }
};

export default sliderReducer;
