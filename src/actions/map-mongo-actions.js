import * as types from '../actions/action-types';
import fetch from 'isomorphic-fetch';

export function requestMap(idMap) {
  return {
    type: types.GET_MAP_REQUEST,
    idMap
  };
}
export function receiveMap(markers) {
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

export function fetchMap(idMap) {
  return function (dispatch) {
    dispatch(requestMap(idMap));
    return fetch(`http://localhost:3000/map/${idMap}`, { method: 'GET', timeout: 5000 })
         .then((response) => {
           console.log(response);
           if (response.status >= 400) {
             dispatch(failMap(`Сервер вернул код ошибки ${response.status}`));
           }
           response.json().then(json => {
//                   console.log(json);
             return dispatch(receiveMap(json));
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

export function generateInitialMarkers(moMarkerObj) {
//  console.log('MongoMap:generateInitialMarkers');
//  console.log(moMarkerObj);
  const markers = [];

  for (let i = 0; i < moMarkerObj['данные'].length; i++) {
    const position = new google.maps.LatLng(
      Number(moMarkerObj['данные'][i]['Широта']),
      Number(moMarkerObj['данные'][i]['Долгота'])
    );

    markers.push({
      position,
      title:   moMarkerObj['данные'][i]['МО'],
      moType  : moMarkerObj['данные'][i]['Тип МО'],
      level   : moMarkerObj['данные'][i]['Иерархия'],
      ogrn    : moMarkerObj['данные'][i]['ОГРН'],
      address : `${moMarkerObj['данные'][i]['Регион']  },${
                moMarkerObj['данные'][i]['Населенный пункт']  },${
                moMarkerObj['данные'][i]['Улица']  },${
                moMarkerObj['данные'][i]['Дом']}`,
      showInfo: false
    });
  }
  return markers;
}
