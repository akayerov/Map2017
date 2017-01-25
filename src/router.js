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

import UserListContainer from './components/containers/user-list-container';
import UserProfileContainer from './components/containers/user-profile-container';
import WidgetListContainer from './components/containers/widget-list-container';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
        <Route path="maps1">
            <IndexRoute component={SimpleMap} />
        </Route>
        <Route path="maps2">
            <IndexRoute component={StyledMap} />
        </Route>
        <Route path="maps3">
            <IndexRoute component={GeolocationMap} />
        </Route>
        <Route path="maps4">
            <IndexRoute component={KmlLayer} />
        </Route>
        <Route path="maps5">
            <IndexRoute component={DirectionsMap} />
        </Route>
        <Route path="maps6">
            <IndexRoute component={SimpleMarker} />
        </Route>
        <Route path="maps7">
            <IndexRoute component={JsonMarker} />
        </Route>
        <Route path="maps_mo">
            <IndexRoute component={MoYarMap} />
        </Route>
        <Route path="users">
          <Route component={SearchLayoutContainer}>
            <IndexRoute component={UserListContainer} />
          </Route>
          <Route path=":userId" component={UserProfileContainer} />
        </Route>

        <Route path="widgets">
          <Route component={SearchLayoutContainer}>
            <IndexRoute component={WidgetListContainer} />
          </Route>
        </Route>

    </Route>
  </Router>
);
