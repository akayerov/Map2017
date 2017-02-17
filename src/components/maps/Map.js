import React from 'react';
import { Link } from 'react-router';
import MapMongoRedux2 from './MapMongoRedux2';
// маркеры функции
import markerFunc2 from './markers/markers2';
import markerFunc3 from './markers/markers3';
// InfoWindow компоненты
import info2 from './info/infoMap2';
import info3 from './info/infoMap3';


// Using "Stateless Functional Components"
export default function (props) {
  let markerFunc = null;
  let info = null;

  switch (props.params.idMap) {
    case '2': markerFunc = markerFunc2;
      info = info2;
      break;
    case '3': markerFunc = markerFunc3;
      info = info3;
      break;
    default: markerFunc = markerFunc3;
      info = info3;
  }

  return (
    <MapMongoRedux2 idMap = {props.params.idMap}  getMarker= {markerFunc} infoWindow={info}/>
  );
}
