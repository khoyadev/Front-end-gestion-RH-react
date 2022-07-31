import React from 'react';
import Sidebar from '../../pages/Sidebar';
import TypesDetails from './TypesDetails';

const Details = () => {
    return (
        <div className="main">
        <Sidebar />
      <div className="container">
        <div>
        <h1>Details des employees</h1>
        <TypesDetails />
        </div>
      </div>
    </div>
    );
};

export default Details;