// Картинки вставляем в проект, чтобы использовать в Router browserHistory
// иначе картинки не загружаются из отдельных файлов
// было так let icon = 'img/hosp2.png';

import iconHosp2 from '../../../../public/img/hosp2.png';
import iconFap   from '../../../../public/img/hosp_fap.png';
import iconAmb   from '../../../../public/img/hosp_amb.png';

export default function generateInitialMarkers(moMarkerObj) {
//  console.log('MongoMap:generateInitialMarkers');
//  console.log(moMarkerObj);
  const markers = [];

  for (let i = 0; i < moMarkerObj.data.length; i++) {
    const position = new google.maps.LatLng(
      Number(moMarkerObj.data[i].north),
      Number(moMarkerObj.data[i].east)
    );
    const typeMo = moMarkerObj.data[i].typeMo;

    let icon = iconHosp2;

    if (typeMo.indexOf('Фельдшерско-акушерский ') !== -1 ||
        typeMo.indexOf('Домовое') !== -1)      {
      icon = iconFap;
    }    else if (typeMo.indexOf('Амбулатория') !== -1)      {
      icon = iconAmb;
    }


    markers.push({
      icon,
      position,
      title:   moMarkerObj.data[i].mo,
      typeMo,
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
