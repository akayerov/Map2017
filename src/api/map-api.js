import axios from 'axios';
import store from '../store';
import { getMOSuccess } from '../actions/map-actions';

/**
 * Get all MO
 */

export function getMo() {
  return axios.get('http://localhost:3001/mo')
    .then(response => {
      store.dispatch(getMOSuccess(response.data));
      return response;
    });
}
