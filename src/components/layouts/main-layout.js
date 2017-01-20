import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="app">
      <header className="primary-header"></header>
      <aside className="primary-aside">
        <ul>
          <li><Link to="/" activeClassName="active">Home</Link></li>
          <li><Link to="/maps1" activeClassName="active">Simple Map</Link></li>
          <li><Link to="/maps2" activeClassName="active">Styled Map</Link></li>
          <li><Link to="/maps3" activeClassName="active">Geolocation</Link></li>
          <li><Link to="/maps4" activeClassName="active">Kml Layer</Link></li>
          <li><Link to="/maps5" activeClassName="active">Directions</Link></li>
          <li><Link to="/maps6" activeClassName="active">SimpleMarker</Link></li>
          <li><Link to="/maps7" activeClassName="active">JsonMarker</Link></li>
          <li><Link to="/users" activeClassName="active">Users</Link></li>
          <li><Link to="/widgets" activeClassName="active">Widgets</Link></li>
        </ul>
      </aside>
      <main>
        {props.children}
      </main>
    </div>
    );
}
