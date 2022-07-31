import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();
  const base_url = "http://127.0.0.1:8000/api/";
    
  const [employee, setEmployee] = useState({});
    useEffect(() => {
      async function getAllData() {
        const getEmployee = await axios.get(`${base_url}employees/${id}`);
        setEmployee(getEmployee.data);
      }
      getAllData();
    }, [id]);

    const [dataDep, setDataDep] = useState([]);
    // le useEffect se joue lorsque le composant est monte
    useEffect(() => {
      axios
        .get("http://127.0.0.1:8000/api/departements")
        .then((res) => setDataDep(res.data));
    }, []);
  
    const [datafonction, setDataFonction] = useState([]);
    // le useEffect se joue lorsque le composant est monte
    useEffect(() => {
      axios
        .get("http://127.0.0.1:8000/api/fonctions")
        .then((res) => setDataFonction(res.data));
    }, []);
    const url = `${base_url}employees/${employee.id}`;
    function submit(e) {
        e.preventDefault();
        console.log(employee)
        axios
          .patch(url,employee)
          .then((res) => {
            console.log(res.data);
          });
      }
    
      function handle(e) {
        const newdata = { ...employee };
        newdata[e.target.name] = e.target.value;
        setEmployee(newdata);
        console.log(newdata)
      }
    
   
    return (
        <form onSubmit={(e) => submit(e)}>
        <div>
          <input
            onChange={(e) => handle(e)}
            type="text"
            name="nom"
            id="nom"
            placeholder="nom"
            value={employee.nom}
          />
          <input
            onChange={(e) => handle(e)}
            type="text"
            name="prenom"
            id="prenom"
            placeholder="prenom"
            value={employee.prenom}
          />
          <input
            onChange={(e) => handle(e)}
            type="email"
            name="email"
            id="email"
            placeholder="email"
            value={employee.email}
          />
        </div>
  
        <div>
          <input
             onChange={(e) => handle(e)}
            value="homme"
            type="radio"
            id="sexe"
            name="sexe"
            checked={employee.sexe === "homme"}
          />
          <label for="homme">Homme</label>
          <input
           onChange={(e) => handle(e)}
            value="femme"
            type="radio"
            id="sexe"
            name="sexe"
            checked={employee.sexe === "femme"}
          />
          <label for="femme">Femme</label>
        </div>
  
        <div>
          <input
            onChange={(e) => handle(e)}
            type="text"
            name="CIN"
            id="CIN"
            placeholder="CIN"
            value={employee.CIN}
          />
          <input
            onChange={(e) => handle(e)}
            type="text"
            name="CNSS"
            id="CNSS"
            placeholder="CNSS"
            value={employee.CNSS}
          />
        </div>
        <div>
          <input
            onChange={(e) => handle(e)}
            value="celibataire"
            type="radio"
            id="statut_matrimoniel"
            name="statut_matrimoniel"
            checked={employee.statut_matrimoniel === "celibataire"}
          />
          <label for="celibataire">Celibataire</label>
          <input
            onChange={(e) => handle(e)}
            value= "marie"
            type="radio"
            id="statut_matrimoniel"
            name="statut_matrimoniel"
            checked={employee.statut_matrimoniel === "marie"}
          />
          <label for="dewey">Marie</label>
        </div>
        <div>
          <input
            onChange={(e) => handle(e)}
            type="number"
            name="nombre_enfants"
            id="nombre_enfants"
            placeholder="nombre_enfants"
            value={employee.nombre_enfants}
          />
          <input
            onChange={(e) => handle(e)}
            type="text"
            name="telephone"
            id="telephone"
            placeholder="telephone"
            value={employee.telephone}
          />
        </div>
        <div>
          <input
            onChange={(e) => handle(e)}
            type="text"
            name="adresse"
            id="adresse"
            placeholder="adresse"
            value={employee.adresse}
          />
          <input
            onChange={(e) => handle(e)}
            type="date"
            name="date_naissance"
            id="date_naissance"
            placeholder="date_naissance"
            value={employee.date_naissance}
          />
        </div>
        <div>
          <input
            onChange={(e) => handle(e)}
            type="text"
            name="nom_prenom_contact_urgence"
            id="nom_prenom_contact_urgence"
            placeholder="nom_prenom_contact_urgence"
            value={employee.nom_prenom_contact_urgence}
          />
          <input
            onChange={(e) => handle(e)}
            type="text"
            name="telephone_contact_urgence"
            id="telephone_contact_urgence"
            placeholder="telephone_contact_urgence"
            value={employee.telephone_contact_urgence}
          />
        </div>
        <div>
          <label for="departement_id">Departement:</label>
  
          <select
            name="departement_id"
            onChange={(e) => handle(e)}
            id="departement_id"
          >
            <option>--Please choose an option--</option>
            {dataDep.map((departements) => (
              <option value={departements.id}>
                {departements.nom_departement}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label for="fonction_id">Fonction:</label>
  
          <select
            name="fonction_id"
            onChange={(e) => handle(e)}
            id="fonction_id"
          >
            <option value="">--Please choose an option--</option>
            {datafonction.map((fonctions) => (
              <option value={fonctions.id}>{fonctions.nom_fonction}</option>
            ))}
          </select>
        </div>
        <button>Submit</button>
      </form>
    );
};

export default Edit;