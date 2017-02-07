import { combineReducers } from 'redux';

// Reducers
import userReducer from './user-reducer';
import widgetReducer from './widget-reducer';
import searchLayoutReducer from './search-layout-reducer';
import mapReducer from './map-reducer';
import counterReducer from './counter-reducer';

// Combine Reducers
var reducers = combineReducers({
    userState: userReducer,
    widgetState: widgetReducer,
    searchLayoutState: searchLayoutReducer,
    markerState: mapReducer,
    counterState: counterReducer
});

export default reducers;
