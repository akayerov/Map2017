import * as types from '../actions/action-types';
import fetch from 'isomorphic-fetch'

export function requestCounter(idcounter) {
  return {
    type: types.GET_COUNTER_REQUEST,
    idcounter
  };
}
export function receiveCounter(counter) {
  return {
    type: types.GET_COUNTER_SUCCESS,
    counter
  };
}
export function fetchCounter(idcounter) {
   return function (dispatch) {
     dispatch(requestCounter(idcounter))
     return fetch(`http://localhost:3000/counter/${idcounter}`)
       .then(response => response.json())
       .then(json =>
         dispatch(receiveCounter(json))
       )
       // In a real world app, you also want to
       // catch any error in the network call.
   }
 }
