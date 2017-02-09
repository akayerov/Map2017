import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <MuiThemeProvider>
    <div   className = 'fullWidth'>
        <div className='titleApp'>
        <AppBar
         title="Title App"
         iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        </div>
        <div className = 'flex-container'>
        <div className='nav'>
          <ul>
            <li><Link to="/" activeClassName="active">Home</Link></li>
            <li><Link to="/maps1" activeClassName="active">Simple Map</Link></li>
            <li><Link to="/maps2" activeClassName="active">Styled Map</Link></li>
            <li><Link to="/maps3" activeClassName="active">Geolocation</Link></li>
            <li><Link to="/maps4" activeClassName="active">Kml Layer</Link></li>
            <li><Link to="/maps5" activeClassName="active">Directions</Link></li>
            <li><Link to="/maps6" activeClassName="active">SimpleMarker</Link></li>
            <li><Link to="/maps7" activeClassName="active">JsonMarker</Link></li>
            <li><Link to="/maps_mo" activeClassName="active">МО Ярославской области</Link></li>
            <li><Link to="/maps_modb" activeClassName="active">МО Ярославской области Redux</Link></li>
            <li><Link to="/counter" activeClassName="active">MongoDB counter</Link></li>
            <li><Link to="/listsimple" activeClassName="active">List Simple</Link></li>
            <li><Link to="/users" activeClassName="active">Users</Link></li>
            <li><Link to="/widgets" activeClassName="active">Widgets</Link></li>
          </ul>
        </div>
        <div className='mainContext'>
        {props.children}
        </div>
      </div>
    </div>
    </MuiThemeProvider>
    );
}
