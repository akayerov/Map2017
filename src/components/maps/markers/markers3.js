export default function generateInitialMarkers(moMarkerObj) {
//  console.log('MongoMap:generateInitialMarkers');
//  console.log(moMarkerObj);
  const markers = [];

  for (let i = 0; i < moMarkerObj.data.length; i++) {
    const position = new google.maps.LatLng(
      Number(moMarkerObj.data[i].north),
      Number(moMarkerObj.data[i].east)
    );
    let icon = 'img/p_1_0.png';

    switch (moMarkerObj.data[i].value) {
      case '1': icon = 'img/p_1_1.png';
        break;
      case '2': icon = 'img/p_1_2.png';
        break;
      case '3': icon = 'img/p_1_3.png';
        break;
      case '4': icon = 'img/p_1_4.png';
        break;
      case '5': icon = 'img/p_1_5.png';
        break;
      default:
        icon = 'img/p_1_0.png';
    }
    markers.push({
      icon,
      position,
      showInfo: false,
      title:   moMarkerObj.data[i].mo,
      value:   moMarkerObj.data[i].value
    });
  }
  return markers;
}
