import { default as React,  Component } from "react";
import { connect } from 'react-redux';
import Counter from '../views/counter';
import store from '../../store';
import * as types from '../../actions/action-types';

//import * as counterapi from '../../api/counter-api';
import {fetchCounter,requestCounter} from '../../actions/counter-actions';

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.handleClickRefresh = this.handleClickRefresh.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { idECounter : 0 }
//    this.idECounter = 0;
  }

  componentDidMount() {
       store.dispatch(fetchCounter(1));

  }
  handleClickRefresh() {
    console.log("Press key Refresh");
    store.dispatch(fetchCounter(this.state.idECounter));
  }
  handleChange(event) {
    console.log("Text changed");
    console.log(event.target.value);
//  Так можно однако не будет реендерится!!
//    this.idECounter = Number(event.target.value);
    this.setState({idECounter:  Number(event.target.value) });

  }

  render() {
    console.log(this.state.idECounter);
    return (
      <Counter onClick = {this.handleClickRefresh}
               onChange = {this.handleChange}
               idECounter = { this.state.idECounter }
               isFetching = {this.props.isFetching }
               didInvalidate =  {this.props.didInvalidate }
               errMessage =  {this.props.errMessage }
               {...this.props.counter}/>
    );
  }

}
//{...this.props.counter}/>

const mapStateToProps = function(store) {
  return {
    counter: store.counterState.counter,
    isFetching: store.counterState.isFetching,
    didInvalidate: store.counterState.didInvalidate,
    errMessage: store.counterState.errMessage
  };
};

export default connect(mapStateToProps)(CounterContainer);
