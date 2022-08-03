import React, { useEffect, useState } from "react";
import ajax from "./ajax";

const Test= () => {
  const [departements, setDepartements] = useState([]);

  useEffect(() => {
    (async () => {
      const departements = await ajax.getAllDepartmentsBis();
      setDepartements(departements);
    })();
  },[]);

  return (
    <div>
      <h1>Test</h1>
      {departements.length > 0 && departements.map((departement) => 
        <p key={departement.id}>{departement.nom_departement}</p>
      )}
    </div>
  );
};
export default Test;