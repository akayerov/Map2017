import * as types from '../actions/action-types';

export function getMOSuccess(markers) {
  return {
    type: types.GET_MO_SUCCESS,
    markers
  };
}
