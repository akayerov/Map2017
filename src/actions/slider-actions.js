import * as types from '../actions/action-types';

export function toogleLeftSlider() {
  console.log('toogleLeftSlider');
  return {
    type: types.TOOGLE_LEFT_SLIDER
  };
}
export function toogleRightSlider() {
  return {
    type: types.TOOGLE_RIGHT_SLIDER
  };
}

export function toogleTheme() {
  return {
    type: types.TOOGLE_THEME
  };
}
