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

export function failCounter(errMessage) {
  return {
    type: types.GET_COUNTER_FAILTURE,
    errMessage
  };
}

// работающая функция, работаю над обработкой ошибок
/*
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
*/

// фукция работает - возвращает ошибочные ответы от сервера
// нет connection c базой Mongo  404
// не найден (нет в базе) объект   404
// нет возможности обработать зависание самого сервера port=3000
/*
 export function fetchCounter(idcounter) {
    return function (dispatch) {
      dispatch(requestCounter(idcounter))
      return fetch(`http://localhost:3000/counter/${idcounter}`)
        .then(function(response) {
              console.log(response);
              if (response.status >= 400) {
                  dispatch(failCounter(idcounter))
              }
              response.json().then(json =>
                dispatch(receiveCounter(json))
              )
         });
    }
  }
*/
  export function fetchCounter(idcounter) {
     return function (dispatch) {
       dispatch(requestCounter(idcounter))
       return fetch(`http://localhost:3000/counter/${idcounter}`, {method: 'GET', timeout: 5000})
         .then(function(response) {
               console.log(response);
               if (response.status >= 400) {
                   dispatch(failCounter(`Сервер вернул код ошибки ${response.status}`))
               }
               response.json().then(json =>
                 dispatch(receiveCounter(json))
               )
          })
          .catch(function(e) {
                console.log('Access server Error');
                console.log(e);
                if (!e.response) {
                 e.message = "Сервер не отвечает！"
                }
                return dispatch(failCounter(e.message));
          })
     }
   }


/*
  export function fetchCounter(idcounter) {
     return function (dispatch) {
       dispatch(requestCounter(idcounter))
       return fetch(`http://localhost:3000/counter/${idcounter}`, {method: 'GET', timeout: 5000})
         .then(function(response) {
               if (response.status >= 400) {
                   dispatch(failCounter(idcounter))
               } else {
                 response.json().then(json =>  {
                     console.log(json);
                     return dispatch(receiveCounter(json))
                   }
                   )
               }
           })
           .catch(reject);
        }
   }
*/
