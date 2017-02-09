import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <MuiThemeProvider>
    <div>
      <h1>Counter</h1>
      <TextField
        floatingLabelText="Id Coun"
        value = {props.idECounter}
        onChange={props.onChange}
      />
      <div>
      <p>Name = {props.Name}</p>
      <span>Value = {props.value}</span>
      </div>
      <div>
      <RaisedButton
        primary={true}
        label='Обновить'
        onClick={props.onClick}
      />
      </div>
      {props.didInvalidate == true &&
        <div className='centerDialog'>
          <h4>{props.errMessage}</h4>
        </div>
      }
      {props.isFetching == true &&
          <div>
          <CircularProgress className='center' size={60} thickness={7} />
          </div>
      }
    </div>
  </MuiThemeProvider>
  );
}
//value={props.idcounter}
