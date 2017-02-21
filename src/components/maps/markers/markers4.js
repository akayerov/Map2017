// Картинки вставляем в проект, чтобы использовать в Router browserHistory
// иначе картинки не загружаются из отдельных файлов
// было так let icon = 'img/hosp2.png';

import p2_1 from '../../../../public/img/p_2_1.png';
import p2_2 from '../../../../public/img/p_2_2.png';
import p2_3 from '../../../../public/img/p_2_3.png';
import p2_4 from '../../../../public/img/p_2_4.png';
import p2_5 from '../../../../public/img/p_2_5.png';

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

    switch (moMarkerObj.data[i].icon) {
      case 'p2_1': icon = p2_1;
        break;
      case 'p2_2': icon = p2_2;
        break;
      case 'p2_3': icon = p2_3;
        break;
      case 'p2_4': icon = p2_4;
        break;
      case 'p2_5': icon = p2_5;
        break;
      default:
        icon = p_1_1;
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
