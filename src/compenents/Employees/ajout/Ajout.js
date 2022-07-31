import * as React from 'react';
import Sidebar from "../../pages/Sidebar";

import FormEmploye from './FormEmploye';


const Ajout = () => {
  return (
    <div className="main">
        <Sidebar />
      <div className="container">
        {/* <FormEmploye /> */}
        <FormEmploye />
     
      </div>
    </div>
  );
};

export default Ajout;
