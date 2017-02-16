export default function generateInitialMarkers(moMarkerObj) {
//  console.log('MongoMap:generateInitialMarkers');
//  console.log(moMarkerObj);
  const markers = [];

  for (let i = 0; i < moMarkerObj.data.length; i++) {
    const position = new google.maps.LatLng(
      Number(moMarkerObj.data[i].north),
      Number(moMarkerObj.data[i].east)
    );

    markers.push({
      icon    :'img/hosp2.png',
      position,
      title:   moMarkerObj.data[i].mo,
      moType  : moMarkerObj.data[i].typeMo,
      level   : moMarkerObj.data[i].level,
      ogrn    : moMarkerObj.data[i].ogrn,
      address : `${moMarkerObj.data[i].region  },${
                moMarkerObj.data[i].np  },${
                moMarkerObj.data[i].street},${
                moMarkerObj.data[i].house}`,
      showInfo: false
    });
  }
  return markers;
}
