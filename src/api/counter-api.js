import axios from 'axios';
import store from '../store';
import types from '../actions/action-types';


export function getCounter(idCounter) {
    console.log('Api getCounter');
    return axios.get('http://localhost:3000/counter/' + idCounter)
    .then(response => {
        console.log('Api getCounter then get');
        console.log(response);
        store.dispatch({
            type: types.GET_COUNTER_SUCCESS,
            counter: response.data
        });
        return response;
    });
}


export function getCounter1() {
    console.log('Api getCounter1');
    let ct =  { name: 'Counter 55', 'value' : 55 };
/*
    store.dispatch({
        type: types.GET_COUNTER_SUCCESS,
        counter: ct
    });
*/
    return ct;

}
