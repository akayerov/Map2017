import { default as React,  Component } from "react";
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

export default class Counter1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MuiThemeProvider>
      <div>
        <div>
        <h1>Counter</h1>
        <p>Name = {this.props.Name}</p>
        <span>Value = {this.props.value}</span>
        </div>
        <TextField
          id="idcounter"
          onChange={this.props.onChahge}
        />
        <RaisedButton
          primary={true}
          label='Обновить'
          onClick={this.props.onClick}
        />
      </div>
    </MuiThemeProvider>    );
  }

}

//export default Counter1;
//value={this.props.idcounter}
