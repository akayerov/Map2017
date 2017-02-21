import React from 'react';

export default function (props) {
  return (
    <div>
      <h4>{props.title}</h4>
      <p>Тип:{props.typeMo}</p>
      <p>Уровень:{props.level}</p>
      <p>ОГРН:{props.ogrn}</p>
      <p>Адрес:{props.address}</p>
      <p>Сайт:<a href={props.site} target='_blank'>{props.site}</a></p>
    </div>
  );
}
