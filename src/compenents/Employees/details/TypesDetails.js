import axios from "axios";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";

const TypesDetails = () => {
  const { id } = useParams();
  const base_url = "http://127.0.0.1:8000/api/";

  const [employee, setEmployee] = useState({});
  const [departement, setDepartement] = useState({});
  const [fonction, setFonction] = useState({});

  // le useEffect se joue lorsque le composant est monte
  useEffect(() => {
    async function getAllData() {
      const getEmployee = await axios.get(`${base_url}employees/${id}`);
      setEmployee(getEmployee.data);

      const getFonction = await axios.get(
        `${base_url}fonctions/${getEmployee.data.fonction_id}`
      );
      setFonction(getFonction.data);

      const getDepartement = await axios.get(
        `${base_url}departements/${getEmployee.data.departement_id}`
      );
      setDepartement(getDepartement.data);
    }
    getAllData();
  }, [id]);

  return (
    <Box sx={{ width: "100%", maxWidth: 500 }}>
      <Typography variant="h6" gutterBottom>
        Nom: {employee.nom} Prenom: {employee.prenom}
      </Typography>

      <Typography variant="h6" gutterBottom>
        email: {employee.email} sexe: {employee.sexe}
      </Typography>

      <Typography variant="h6" gutterBottom>
        CIN: {employee.CIN} CNSS: {employee.CNSS}
      </Typography>

      <Typography variant="h6" gutterBottom>
        statut_matrimoniel: {employee.statut_matrimoniel} nombre_enfants:{" "}
        {employee.nombre_enfants}
      </Typography>

      <Typography variant="h6" gutterBottom>
        telephone: {employee.telephone} adresse: {employee.adresse}
      </Typography>
      <Typography variant="h6" gutterBottom>
        date_naissance: {employee.date_naissance}
      </Typography>
      <Typography variant="h6" gutterBottom>
        nom_prenom_contact_urgence: {employee.nom_prenom_contact_urgence}{" "}
        contact_urgence: {employee.telephone_contact_urgence}
      </Typography>
      <Typography variant="h6" gutterBottom>
        fonction: {fonction.nom_fonction}
      </Typography>
      <Typography variant="h6" gutterBottom>
        departement: {departement.nom_departement}
      </Typography>
    </Box>
  );
};

export default TypesDetails;

// import React, { Component, useEffect, useState } from "react";
//
// import axios from "axios";

// export default class TypesDetails extends Component {

//     constructor(props){
//         super(props)
//         this.setState={
//             employeedetails:{},
//         }
//     }
//     componentDidMount(){
//         const {id} = this.props.match.params;

//         fetch(`http://127.0.0.1:8000/api/employees/id?=${id}`)
//         .then((response)=>response.json())
//         .then((jsonResponse)=>{
//             this.setState({employeedetails: jsonResponse?.data})
//         })
//     }

//     // le useEffect se joue lorsque le composant est monte
//     // useEffect(() => {
//     //   axios
//     //     .get(`http://127.0.0.1:8000/api/employees/id?=${id}`)
//     //     .then((res) => console.log(res.data));
//     // }, []);
//     render(){
//       const id = localStorage.getItem("ID")
//         const {employeedetails} = this.state
//         const {
//             nom,
//             prenom,
//             email,
//             sexe,
//             CIN,
//             CNSS,
//             statut_matrimoniel,
//             nombre_enfants,
//             telephone,
//             adresse,
//             date_naissance,
//             nom_prenom_contact_urgence,
//             telephone_contact_urgence,
//             fonction_id,
//             departement_id,
//         } = employeedetails

//   return (
//       <div>{id}</div>

// //

//   );
// }
// }
