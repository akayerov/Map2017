import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';
import SearchLayoutContainer from './components/containers/search-layout-container';

// Pages
import Home from './components/home';
import SimpleMap from './components/maps/simpleMap.jsx';
import SimpleMarker from './components/maps/simpleMarker';
import StyledMap from './components/maps/styledMap';
import GeolocationMap from './components/maps/geoMap';
import KmlLayer from './components/maps/kmlLayer';
import DirectionsMap from './components/maps/directions';
import JsonMarker from './components/maps/jsonMarker';
import MoYarMap from './components/maps/moYarMap';
import MapJsonRedux from './components/maps/MapJsonRedux';
import MapMongoRedux from './components/maps/MapMongoRedux';

import UserListContainer from './components/containers/user-list-container';
import UserProfileContainer from './components/containers/user-profile-container';
import WidgetListContainer from './components/containers/widget-list-container';
import CounterContainer from './components/containers/counter-container';
import ListSimple from './components/mat_ui/simlple-list';
// маркеры функции
import markerFunc2 from './components/maps/markers/markers2';
import markerFunc3 from './components/maps/markers/markers3';
// InfoWindow компоненты
import info2 from './components/maps/info/infoMap2';
import info3 from './components/maps/info/infoMap3';
import darkStyleMap from './constants/fancyMapStyles.json';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path='/' component={Home} />
      <Route path='maps1'>
        <IndexRoute component={SimpleMap} />
      </Route>
      <Route path='maps2'>
        <IndexRoute component={StyledMap} />
      </Route>
      <Route path='maps3'>
        <IndexRoute component={GeolocationMap} />
      </Route>
      <Route path='maps4'>
        <IndexRoute component={KmlLayer} />
      </Route>
      <Route path='maps5'>
        <IndexRoute component={DirectionsMap} />
      </Route>
      <Route path='maps6'>
        <IndexRoute component={SimpleMarker} />
      </Route>
      <Route path='maps7'>
        <IndexRoute component={JsonMarker} />
      </Route>
      <Route path='maps_mo'>
        <IndexRoute component={MoYarMap} />
      </Route>
      <Route path='maps_mojs'>
        <IndexRoute component={MapJsonRedux} />
      </Route>
      <Route path='maps_modb2'>
        <IndexRoute component={MapMongoRedux} idMap = '2'  getMarker= {markerFunc2} infoWindow={info2} styleMap = {darkStyleMap}/>
      </Route>
      <Route path='maps_modb3'>
        <IndexRoute component={MapMongoRedux} idMap = '3'  getMarker= {markerFunc3} infoWindow={info3} styleMap = {''}/>
      </Route>
      <Route path='counter'>
        <IndexRoute component={CounterContainer} />
      </Route>
      <Route path='listsimple'>
        <IndexRoute component={ListSimple} />
      </Route>
      <Route path='info2'>
        <IndexRoute component={info2} />
      </Route>
      <Route path='users'>
        <Route component={SearchLayoutContainer}>
          <IndexRoute component={UserListContainer} />
        </Route>
        <Route path=':userId' component={UserProfileContainer} />
      </Route>

      <Route path='widgets'>
        <Route component={SearchLayoutContainer}>
          <IndexRoute component={WidgetListContainer} />
        </Route>
      </Route>

    </Route>
  </Router>
);
