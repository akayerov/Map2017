import React from 'react';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div>
      <div>
      <h1>Counter</h1>
      <p>Name = {props.Name}</p>
      <span>Value = {props.value}</span>
      </div>
      <button onClick = {props.OnClick}>Обновить</button>
    </div>
  );
}
