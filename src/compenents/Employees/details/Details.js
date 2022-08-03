import React from 'react';
import Sidebar from '../../pages/Sidebar';
import TypesDetails from './TypesDetails';

const Details = () => {
    return (
        <div className="main">
        <Sidebar />
      <div className="container">
        <div>
        <h3>Details des employees</h3>
        <TypesDetails />
        </div>
      </div>
    </div>
    );
};

export default Details;