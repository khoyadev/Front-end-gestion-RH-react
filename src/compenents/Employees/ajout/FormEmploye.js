import axios from "axios";
import ajax from "./../../ajax";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { useFormControl } from "@mui/material/FormControl";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
const FormEmploye = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [departement, setDepartements] = useState([]);
  useEffect(() => {
    (async () => {
      const departement = await ajax.getAllDepartmentsBis();
      setDepartements(departement.data);
    })();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:8000/api/departements")
  //     .then((res) => setDepartements(res.data));
  // }, []);

  const [typeContrat, settypeContrat] = useState([]);
  // le useEffect se joue lorsque le composant est monte
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/typeContrats")
      .then((res) => settypeContrat(res.data));
  }, []);
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
    console.log(data);
    axios.post(url, data).then((res) => {
      console.log(res.data);
    });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  return (
    <form onSubmit={(e) => submit(e)}>
      <div>
        
        <input onChange={(e) => handle(e)} type="text" name="nom" id="nom" placeholder="nom"/>
        <input onChange={(e) => handle(e)} type="text" name="prenom" id="prenom" placeholder="prenom"/>
        <input onChange={(e) => handle(e)} type="email" name="email" id="email" placeholder="email"
        />
      </div>

      <div>
        <input onChange={(e) => handle(e)} value="homme" type="radio" id="sexe" name="sexe"/>
        <label for="homme">Homme</label>
        <input onChange={(e) => handle(e)} value="femme" type="radio" id="sexe" name="sexe"/>
        <label for="femme">Femme</label>
      </div>

      <div>
        <input onChange={(e) => handle(e)} type="text" name="CIN" id="CIN" placeholder="CIN"/>
        <input onChange={(e) => handle(e)} type="text" name="CNSS" id="CNSS" placeholder="CNSS"/>
      </div>
      <div>
        <input onChange={(e) => handle(e)} value="celibataire" type="radio" id="statut_matrimoniel" name="statut_matrimoniel"/>
        <label for="celibataire">Celibataire</label>
        <input onChange={(e) => handle(e)} value= "marie" type="radio" id="statut_matrimoniel" name="statut_matrimoniel"/>
        <label for="dewey">Marie</label>
      </div>
      <div>
        <input onChange={(e) => handle(e)} type="number" name="nombre_enfants" id="nombre_enfants" placeholder="nombre_enfants"
        />
        <input onChange={(e) => handle(e)} type="text" name="telephone" id="telephone" placeholder="telephone"
        />
      </div>
      <div>
        <input onChange={(e) => handle(e)} type="text" name="adresse" id="adresse" placeholder="adresse"
        />
        <input onChange={(e) => handle(e)} type="date" name="date_naissance" id="date_naissance" placeholder="date_naissance"
        />
      </div>
      <div>
        <input onChange={(e) => handle(e)} type="text" name="nom_prenom_contact_urgence" id="nom_prenom_contact_urgence" placeholder="nom_prenom_contact_urgence"
        />
        <input onChange={(e) => handle(e)} type="text" name="telephone_contact_urgence" id="telephone_contact_urgence" placeholder="telephone_contact_urgence"
        />
      </div>
      <div>
        <label for="departement_id">Departement:</label>

        <select name="departement_id" onChange={(e) => handle(e)} id="departement_id"
        > <option>--Please choose an option--</option> {departement.length > 0 && departement.map((departements) =>   <option value={departements.id}>{departements.nom_departement}</option> )}
        </select>
      </div>
      <div>
        <label for="fonction_id">Fonction:</label>

        <select name="fonction_id" onChange={(e) => handle(e)} id="fonction_id"
        > <option value="">--Please choose an option--</option> {datafonction.map((fonctions) => (   <option value={fonctions.id}>{fonctions.nom_fonction}</option> ))}
        </select>
      </div>
      <h1>Contrat</h1>
      <div>
      <input onChange={(e) => handle(e)} type="hidden" name="employee_id"
        />
        <input onChange={(e) => handle(e)} type="text" name="duree" id="duree" placeholder="duree"
        />
        <input onChange={(e) => handle(e)} type="date" name="date_entree" id="date_entree" placeholder="date_entree"
        />       <input onChange={(e) => handle(e)} type="date" name="date_sortie" id="date_sortie" placeholder="date_sortie"
        />
        <input onChange={(e) => handle(e)} type="text" name="salaire" id="salaire" placeholder="salaire"
        />
      </div>
       <div>
        <label for="type_contrat_id">type de contrat:</label>

        <select name="type_contrat_id" onChange={(e) => handle(e)} id="type_contrat_id"
        > <option value="">--Please choose an option--</option> {typeContrat.map((fonctions) => (   <option value={fonctions.id}>{fonctions.nom_typecontrat}</option> ))}
        </select>
      </div>
      <button>Submit</button>
    </form>
    // <form onSubmit={(e) => submit(e)}>
    //   <Box
    //     component="form"
    //     sx={{
    //       "& .MuiTextField-root": { m: 3, width: "25ch" },
    //     }}
    //     noValidate
    //     autoComplete="off"
    //   >
    //     <Typography variant="h6" gutterBottom>
    //       Informations personnelles
    //     </Typography>
    //     <div>
    //       <TextField
    //         onChange={(e) => handle(e)}
    //         required
    //         name="nom"
    //         id="nom"
    //         label="Nom"
    //       />
    //       <TextField
    //         required
    //         onChange={(e) => handle(e)}
    //         name="prenom"
    //         id="prenom"
    //         label="Prenom"
    //         autoComplete="prenom"
    //         autoFocus
    //         {...register("prenom", {
    //           required: "Champ requise",
    //           pattern: {
    //             message: "Invalid prenom address",
    //           },
    //         })}
    //         error={!!errors?.prenom}
    //         helperText={errors?.prenom ? errors.prenom.message : null}
    //       />
    //       <TextField
    //         required
    //         onChange={(e) => handle(e)}
    //         id="email"
    //         name="email"
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

    //       <TextField
    //         onChange={(e) => handle(e)}
    //         required
    //         name="telephone"
    //         id="telephone"
    //         label="Telephone"
    //       />
    //       <TextField
    //         onChange={(e) => handle(e)}
    //         required
    //         name="adresse"
    //         id="adresse"
    //         label="Adresse"
    //       />

    //       <TextField
    //         onChange={(e) => handle(e)}
    //         required
    //         type="date"
    //         name="date_naissance"
    //         id="date_naissance"
    //         label=""
    //       />
    //       <TextField
    //         onChange={(e) => handle(e)}
    //         required
    //         name="CIN"
    //         id="CIN"
    //         label="CIN"
    //       />
    //       <TextField
    //         onChange={(e) => handle(e)}
    //         required
    //         name="CNSS"
    //         id="CNSS"
    //         label="CNSS"
    //       />
    //       <RadioGroup
    //         row
    //         aria-labelledby="demo-row-radio-buttons-group-label"
    //         name="sexe"
    //       >
    //         <FormControlLabel
    //           onChange={(e) => handle(e)}
    //           value="femme"
    //           control={<Radio />}
    //           label="Femme"
    //         />
    //         <FormControlLabel
    //           onChange={(e) => handle(e)}
    //           value="homme"
    //           control={<Radio />}
    //           label="Homme"
    //         />
    //       </RadioGroup>
    //       <RadioGroup
    //         row
    //         aria-labelledby="demo-row-radio-buttons-group-label"
    //         name="statut_matrimoniel"
    //       >
    //         <FormControlLabel
    //           onChange={(e) => handle(e)}
    //           value="celibataire"
    //           control={<Radio />}
    //           label="Célibataire"
    //         />
    //         <FormControlLabel
    //           onChange={(e) => handle(e)}
    //           value="marie"
    //           control={<Radio />}
    //           label="Marié"
    //         />
    //       </RadioGroup>
    //       <TextField
    //         onChange={(e) => handle(e)}
    //         name="nombre_enfants"
    //         id="nombre_enfants"
    //         label="Nombre d'enfants"
    //         type="number"
    //         InputLabelProps={{
    //           shrink: true,
    //         }}
    //       />
    //       <p>Contact urgence</p>
    //       <TextField
    //         onChange={(e) => handle(e)}
    //         required
    //         name="nom_prenom_contact_urgence"
    //         id="nom_prenom_contact_urgence"
    //         label="Nom etPrenom"
    //       />
    //       <TextField
    //         onChange={(e) => handle(e)}
    //         required
    //         name="telephone_contact_urgence"
    //         id="telephone_contact_urgence"
    //         label="Telephone"
    //       />
    //       <p>Poste</p>
    //       <input
    //         onChange={(e) => handle(e)}
    //         required
    //         type="hidden"
    //         name="employee_id"
    //         id="employee_id"
            
    //       />
    //       <p>date d'entree</p>
    //        <TextField
    //         onChange={(e) => handle(e)}
    //         required
    //         type="date"
    //         name="date_entree"
    //         id="date_entree"
    //         label=""
    //       />
    //        <p>date de sortie</p>
    //        <TextField
    //         onChange={(e) => handle(e)}
    //         required
    //         type="date"
    //         name="date_sortie"
    //         id="date_sortie"
    //         label=""
    //       />
    //        <TextField
    //         onChange={(e) => handle(e)}
    //         required
    //         name="duree"
    //         id="duree"
    //         label="Duree"
    //       />
    //        <TextField
    //         onChange={(e) => handle(e)}
    //         required
    //         name="salaire"
    //         id="salaire"
    //         label="Salaire"
    //       />
    //       <InputLabel id="demo-simple-select-label">Type de Contrat</InputLabel>
    //       <Select
    //         // labelId="demo-simple-select-label"
    //         // id="demo-simple-select"
    //         // value={age}
    //         sx={{ m: 1, width: 300 }}
    //         id="type_contrat_id"
    //         name="type_contrat_id"
    //         label="Type de contrat"
    //         onChange={(e) => handle(e)}
    //       >
    //         {
    //          typeContrat.map((typeContrats) => (
    //             <MenuItem value={typeContrats.id}>
    //               {typeContrats.nom_typecontrat}
    //             </MenuItem>
    //           ))}
    //       </Select>
    //       <InputLabel id="demo-simple-select-label">Departement</InputLabel>
    //       <Select
    //         // labelId="demo-simple-select-label"
    //         // id="demo-simple-select"
    //         // value={age}
    //         sx={{ m: 1, width: 300 }}
    //         id="departement_id"
    //         name="departement_id"
    //         label="Departement"
    //         onChange={(e) => handle(e)}
    //       >
    //         {departement.length > 0 &&
    //           departement.map((departements) => (
    //             <MenuItem value={departements.id}>
    //               {departements.nom_departement}
    //             </MenuItem>
    //           ))}
    //       </Select>
    //       <InputLabel id="demo-simple-select-label">Fonction</InputLabel>
    //       <Select
    //         // labelId="demo-simple-select-label"
    //         // id="demo-simple-select"
    //         // value={age}
    //         sx={{ m: 1, width: 300 }}
    //         id="fonction_id"
    //         name="fonction_id"
    //         label="Fonction"
    //         onChange={(e) => handle(e)}
    //       >
    //         {
    //           datafonction.map((fonctions) => (
    //             <MenuItem value={fonctions.id}>
    //               {fonctions.nom_fonction}
    //             </MenuItem>
    //           ))}
    //       </Select>
    //     </div>
    //     <Button >
    //    enregistrer
    //   </Button>
    //   </Box>
     
    // </form>
  );
};

export default FormEmploye;
