// Картинки вставляем в проект, чтобы использовать в Router browserHistory
// иначе картинки не загружаются из отдельных файлов
// было так let icon = 'img/hosp2.png';

import p_1_1 from '../../../../public/img/p_2_1.png';
import p_1_2 from '../../../../public/img/p_2_2.png';
import p_1_3 from '../../../../public/img/p_2_3.png';
import p_1_4 from '../../../../public/img/p_2_4.png';
import p_1_5 from '../../../../public/img/p_2_5.png';

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
      case '1': icon = p_1_1;
        break;
      case '2': icon = p_1_2;
        break;
      case '3': icon = p_1_3;
        break;
      case '4': icon = p_1_4;
        break;
      case '5': icon = p_1_5;
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
