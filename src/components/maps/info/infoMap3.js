import { default as React,  Component } from 'react';

// import React from 'react';

export default function (props) {
  return (
    <div>
      <h4>{props.title}</h4>
      <p>Показатель:{props.value}</p>
    </div>
  );
}
