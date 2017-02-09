import React from 'react';
import { connect } from 'react-redux';
import Counter from '../views/counter';
import store from '../../store';
import * as types from '../../actions/action-types';

//import * as counterapi from '../../api/counter-api';
import {fetchCounter,requestCounter} from '../../actions/counter-actions';



const CounterContainer = React.createClass({

  componentDidMount: function() {
/*
    store.dispatch({
      type: types.GET_COUNTER_SUCCESS,
      counter: { name: "Counter 1", "value" : 1 }
    });
*/
//    counterapi.getCounter(1);
//    counterapi.getCounter1();

//      fetchCounter(1);
/*
1
      store.dispatch({
        type: types.GET_COUNTER_REQUEST,
        idcounter: 1 });
*/
       store.dispatch(fetchCounter(1));

  },

  render: function() {
    return (
      <Counter {...this.props.counter}/>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    counter: store.counterState.counter
  };
};

export default connect(mapStateToProps)(CounterContainer);
