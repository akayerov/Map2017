import * as types from '../actions/action-types';
import fetch from 'isomorphic-fetch';

export function requestMap(idMap) {
  return {
    type: types.GET_MAP_REQUEST,
    idMap
  };
}
export function receiveMap(markers, generateInitialMarkers) {
  return {
    type: types.GET_MAP_SUCCESS,
    markers,
    generateInitialMarkers
  };
}

export function failMap(errMessage) {
  return {
    type: types.GET_MAP_FAILTURE,
    errMessage
  };
}
export function toggleMarkerInfo(index, bool) {
  return {
    type: 'TOGGLE_MAP_MARKER',
    payload: { index, bool }
  };
}

export function fetchMap(idMap, generateInitialMarkers) {
  return function (dispatch) {
    dispatch(requestMap(idMap));
    return fetch(`http://192.168.65.31:3000/map/${idMap}`, { method: 'GET', timeout: 5000 })
         .then((response) => {
           console.log(response);
           if (response.status >= 400) {
             dispatch(failMap(`Сервер вернул код ошибки ${response.status}`));
           }
           response.json().then(json => {
//                   console.log(json);
             return dispatch(receiveMap(json, generateInitialMarkers));
           }
               );
         })
          .catch((e) => {
            console.log('Access server Error');
            console.log(e);
            if (!e.response) {
              e.message = 'Сервер не отвечает！';
            }
            return dispatch(failMap(e.message));
          });
  };
}
