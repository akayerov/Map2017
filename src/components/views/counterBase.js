import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <MuiThemeProvider>
    <div>
      <div>
      <h1>Counter</h1>
      <p>Name = {props.Name}</p>
      <span>Value = {props.value}</span>
      </div>
      <TextField
        id="idcounter"
        value={props.idcounter}
        onChange={props.handleChangeId}
      />
      <RaisedButton
        primary={true}
        label='Обновить'
        onClick={props.onClick}
      />
    </div>
  </MuiThemeProvider>
  );
}
