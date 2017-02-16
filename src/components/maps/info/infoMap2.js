import { default as React,  Component } from 'react';

// import React from 'react';

export default function (props) {
  return (
    <div>
      <h4>{props.title}</h4>
      <p>Тип:{props.moType}</p>
      <p>Уровень:{props.level}</p>
      <p>ОГРН:{props.ogrn}</p>
      <p>Адрес:{props.address}</p>
    </div>
  );
}
