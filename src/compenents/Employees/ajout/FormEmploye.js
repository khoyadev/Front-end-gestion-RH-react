import axios from "axios";
import ajax from "./../../ajax";
import React, { useEffect, useState } from "react";

// import { useFormControl } from "@mui/material/FormControl";
// import { useForm } from "react-hook-form";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
const FormEmploye = () => {

  const [dataDep, setDataDep] = useState([]);
  // le useEffect se joue lorsque le composant est monte
  useEffect(async () => {
    // axios
    //   .get("http://127.0.0.1:8000/api/departements")
    //   .then((res) => setDataDep(res.data));
    //  await ajax.getAllDepartments().then((res) =>{
    //    console.log(res);
    //  });
    const departements = await ajax.getAllDepartments();
    setDataDep(departements);
  },dataDep );

  const [datafonction, setDataFonction] = useState([]);
  // le useEffect se joue lorsque le composant est monte
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/fonctions")
      .then((res) => setDataFonction(res.data));
  }, []);

  const url = "http://127.0.0.1:8000/api/employees";

  const [data, setData] = useState({});

  function submit(e) {
    e.preventDefault();
    console.log(data)
    axios
      .post(url,data)
      .then((res) => {
        console.log(res.data);
      });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
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
        />
        <input
          onChange={(e) => handle(e)}
          type="text"
          name="prenom"
          id="prenom"
          placeholder="prenom"
        />
        <input
          onChange={(e) => handle(e)}
          type="email"
          name="email"
          id="email"
          placeholder="email"
        />
      </div>

      <div>
        <input
           onChange={(e) => handle(e)}
          value="homme"
          type="radio"
          id="sexe"
          name="sexe"
        />
        <label for="homme">Homme</label>
        <input
         onChange={(e) => handle(e)}
          value="femme"
          type="radio"
          id="sexe"
          name="sexe"
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
        />
        <input
          onChange={(e) => handle(e)}
          type="text"
          name="CNSS"
          id="CNSS"
          placeholder="CNSS"
        />
      </div>
      <div>
        <input
          onChange={(e) => handle(e)}
          value="celibataire"
          type="radio"
          id="statut_matrimoniel"
          name="statut_matrimoniel"
        />
        <label for="celibataire">Celibataire</label>
        <input
          onChange={(e) => handle(e)}
          value= "marie"
          type="radio"
          id="statut_matrimoniel"
          name="statut_matrimoniel"
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
        />
        <input
          onChange={(e) => handle(e)}
          type="text"
          name="telephone"
          id="telephone"
          placeholder="telephone"
        />
      </div>
      <div>
        <input
          onChange={(e) => handle(e)}
          type="text"
          name="adresse"
          id="adresse"
          placeholder="adresse"
        />
        <input
          onChange={(e) => handle(e)}
          type="date"
          name="date_naissance"
          id="date_naissance"
          placeholder="date_naissance"
        />
      </div>
      <div>
        <input
          onChange={(e) => handle(e)}
          type="text"
          name="nom_prenom_contact_urgence"
          id="nom_prenom_contact_urgence"
          placeholder="nom_prenom_contact_urgence"
        />
        <input
          onChange={(e) => handle(e)}
          type="text"
          name="telephone_contact_urgence"
          id="telephone_contact_urgence"
          placeholder="telephone_contact_urgence"
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
      <h1>Contrat</h1>
      <div>
      <input
          onChange={(e) => handle(e)}
          type="hidden"
          name="employee_id"
        />
        <input
          onChange={(e) => handle(e)}
          type="text"
          name="duree"
          id="duree"
          placeholder="duree"
        />
        <input
          onChange={(e) => handle(e)}
          type="date"
          name="date_entree"
          id="date_entree"
          placeholder="date_entree"
        />
                <input
          onChange={(e) => handle(e)}
          type="date"
          name="date_sortie"
          id="date_sortie"
          placeholder="date_sortie"
        />
        <input
          onChange={(e) => handle(e)}
          type="text"
          name="salaire"
          id="salaire"
          placeholder="salaire"
        />
      </div>
      <button>Submit</button>
    </form>
    /* //     <form onSubmit={handleSubmit(onSubmit)}>
    //                 <Box
    //     component="form"
    //     sx={{
    //       '& .MuiTextField-root': { m: 5, width: '25ch' },
    //     }}
    //     noValidate
    //     autoComplete="off"
    //   >
    //     <div>
    //       <TextField
    //         required
    //         id="outlined-required"
    //         label="Nom"
    //       />
    //       <TextField
    //         required
    //         id="outlined-required"
    //         label="Prenom"
    //         autoComplete="prenom"
    //         autoFocus
    //         {...register("prenom", {
    //           required: "Champ requise",
    //           pattern: {
    //             message: "Invalid prenom address",
    //           },
    //         })}
    //         error={!!errors?.email}
    //         helperText={errors?.email ? errors.email.message : null}
    //       />
    //       <TextField
    //         required
    //         id="outlined-required"
    //         label="email"
    //         autoComplete="email"
    //         autoFocus
    //         {...register("email", {
    //           required: "Champ requise",
    //           pattern: {
    //             value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    //             message: "Invalid email address",
    //           },
    //         })}
    //         error={!!errors?.email}
    //         helperText={errors?.email ? errors.email.message : null}
    //       />
    //        <TextField
    //         id="outlined-number"
    //         label="Number"
    //         type="number"
    //         InputLabelProps={{
    //           shrink: true,
    //         }}
    //       />
    //       </div>
          
    //       </Box>
    //       <Button type="submit" variant="contained">Contained</Button>
    //     </form> */
  );
};

export default FormEmploye;
