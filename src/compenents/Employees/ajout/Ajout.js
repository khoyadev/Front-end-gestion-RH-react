import * as React from 'react';
import Sidebar from "../../pages/Sidebar";

import FormEmploye from './FormEmploye';


const Ajout = () => {
  return (
    <div className="main">
        <Sidebar />
      <div className="container">
        <div className="form">
        <FormEmploye  />
        </div>
        
     
      </div>
    </div>
  );
};

export default Ajout;
