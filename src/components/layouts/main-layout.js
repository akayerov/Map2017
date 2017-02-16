import React from 'react';
import { Link } from 'react-router';
import MainLay from './main-layout1';

// Using "Stateless Functional Components"
export default function (props) {
  return (
    <div className='app'>
      <MainLay {...props}/>
    </div>
  );
}
