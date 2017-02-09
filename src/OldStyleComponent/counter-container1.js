import { default as React,  Component } from "react";
import { connect } from 'react-redux';
import Counter1 from '../views/counter1';
import store from '../../store';
import * as types from '../../actions/action-types';

//import * as counterapi from '../../api/counter-api';
import {fetchCounter,requestCounter} from '../../actions/counter-actions';

class CounterContainer1 extends Component {
  constructor(props) {
    super(props);
    this.handleClickRefresh = this.handleClickRefresh.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.idCounter = null;
  }

  componentDidMount() {
       store.dispatch(fetchCounter(1));

  }
  handleClickRefresh() {
    console.log("Press key Refresh");
    store.dispatch(fetchCounter(this.idCounter));
  }
  handleChange(event) {
    console.log("Text changed");
    console.log(event.target.value);
    this.idCounter = Number(event.target.value);
  }

  render() {
    return (
      <Counter1 onClick = {this.handleClickRefresh}
          onChahge = {this.handleChange}
          {...this.props.counter}/>
    );
  }

}

const mapStateToProps = function(store) {
  return {
    counter: store.counterState.counter
  };
};

export default connect(mapStateToProps)(CounterContainer1);
