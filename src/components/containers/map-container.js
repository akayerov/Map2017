import React from 'react';
import { connect } from 'react-redux';
import SimpleMap from '../views/simplemap';
import store from '../../store';

const MapContainer = React.createClass({

  componentDidMount: function() {
  },

  render: function() {
    return (
      <div>
       <SimpleMap />
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
  };
};



export default connect(mapStateToProps)(MapContainer);
