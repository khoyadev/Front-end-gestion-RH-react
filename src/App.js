import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ajout from "./compenents/Employees/ajout/Ajout";
import Details from "./compenents/Employees/details/Details";
import Liste from "./compenents/Employees/liste/Liste";
import Edit from "./compenents/Employees/modification/Edit";
import Delete from "./compenents/Employees/suppression/Delete";
import Home from "./compenents/pages/Home";
import Test from "./compenents/Test";
import TestFom from "./compenents/TestFom";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navbar />}> */}
        <Route index element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/testform" element={<TestFom />}/>
        {/* <Route path="/testform" element={<TestForm />} /> */}
        <Route path="/liste" element={<Liste />} />
        <Route path="/ajout" element={<Ajout />} />  
        <Route path="/delete" element={<Delete />} />  
        <Route exact path="/edit/:id" element={<Edit />} />  
        <Route exact path="/details/:id" element={ <Details /> } />  
        {/* <Route exact path="/details/:id" render={(props) => <Details  {...props} /> } /> */}

      </Routes>
    </BrowserRouter>
  );
};

export default App;
