import * as types from '../actions/action-types';
import moMarkers from '../../public/data/moYarMap.json';

export function getMOSuccess() {
    return {
        type: types.GET_MO_SUCCESS,
        markers: moMarkers,
    };
}

export function toggleMarkerInfo(index, bool) {
    return {
        type: 'TOGGLE_MARKER',
        payload: { index, bool },
    };
}
