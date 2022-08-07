import axios from "axios";
import ajax from "./../../ajax";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  Divider,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from "@mui/material";
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

const FormEmploye = () => {
  const {register, handleSubmit, formState: { errors } } = useForm();
  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => {};
  const registerOptions = {
    nom: { required: "Le nom est requis" },
    civilite: { required: "Civilite est requise" },
    prenom: { required: "Prenom est requis" },
    date_naissance: { required: "la date est requise" },
    adresse: { required: "l'adresse est requise" },
    telephone: { required: "le numero est requis" },
    CIN: { required: "le numero de carte d'identite est requis",
    pattern: {
      value: !/[0-9]/,
      message: "Invalid NCI address",
    }
    },
    CNSS: { required: "le numero de caisse social et securite est requis" },
    email: { required: "Email est requis",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    }},
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    }
  };

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
      //console.log(res.data);
    });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
   // console.log(newdata);
  }

  return (

    <form onSubmit={handleSubmit(handleRegistration, handleError) } >
      <Box
        
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" }
          
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Informations personnelles
        </Typography>
        <Divider />
        <div className="divform"> 
        <Stack direction="row" >
        <Stack direction="column" >
        <InputLabel shrink htmlFor="bootstrap-input">
          Civilté
        </InputLabel>
        <FormControl >
        <OutlinedInput sx={{height:35}}
         onChange={(e) => handle(e)}
         name="civilite"
         id="civilite"
         label="civilite"
         autoComplete="civilite"
         autoFocus
         {...register('civilite', registerOptions.civilite) }
         error={!!errors?.civilite}
         helpertext={errors?.civilite ? errors.civilite.message : null}
        />  
         <small className="text-danger">
            {errors?.civilite && errors.civilite.message}
          </small>
      </FormControl>
        </Stack>
        <Stack direction="column" sx={{marginLeft:5}}>
        <InputLabel shrink htmlFor="bootstrap-input">
          Nom
        </InputLabel>
        <FormControl >
        <OutlinedInput sx={{height:35}}
        
         onChange={(e) => handle(e)}
         name="nom"
         id="nom"
         label="nom"
         autoComplete="nom"
         autoFocus
         {...register('nom', registerOptions.nom) }
         error={!!errors?.nom}
         helpertext={errors?.nom ? errors.nom.message : null}
        />  
         <small className="text-danger">
            {errors?.nom && errors.nom.message}
          </small>
      </FormControl>
        </Stack>
        <Stack direction="column" sx={{marginLeft:5}}>
        <InputLabel shrink htmlFor="bootstrap-input">
          Prénom
        </InputLabel>
        <FormControl >
        <OutlinedInput sx={{height:35}}
        
         onChange={(e) => handle(e)}
         name="prenom"
         id="prenom"
         label="prenom"
         autoComplete="prenom"
         autoFocus
         {...register('prenom', registerOptions.prenom) }
        
         error={!!errors?.prenom}
         helpertext={errors?.prenom ? errors.prenom.message : null}
        />  
         <small className="text-danger">
            {errors?.prenom && errors.prenom.message}
          </small>
      </FormControl>
        </Stack>
        </Stack>
        <Stack direction="row" sx={{marginTop:3}} >
        <Stack direction="column" >
        <InputLabel shrink htmlFor="bootstrap-input">
          Date de naissance
        </InputLabel>
        <FormControl >
        <OutlinedInput sx={{height:35}}
         onChange={(e) => handle(e)}
         name="date_naissance"
         id="date_naissance"
         label="date naissance"
         autoComplete="date_naissance"
         type="date"
         autoFocus
         {...register('date_naissance', registerOptions.date_naissance) }
         error={!!errors?.date_naissance}
         helpertext={errors?.date_naissance ? errors.date_naissance.message : null}
        />  
         <small className="text-danger">
            {errors?.date_naissance && errors.date_naissance.message}
          </small>
      </FormControl>
        </Stack>
        <Stack direction="column" sx={{marginLeft:14}}>
        <InputLabel shrink htmlFor="bootstrap-input">
          Adresse
        </InputLabel>
        <FormControl >
        <OutlinedInput sx={{height:35}}
        
         onChange={(e) => handle(e)}
         name="adresse"
         id="adresse"
         label="adresse"
         autoComplete="adresse"
         autoFocus
         {...register('adresse', registerOptions.adresse) }
         error={!!errors?.adresse}
         helpertext={errors?.adresse ? errors.adresse.message : null}
        />  
         <small className="text-danger">
            {errors?.adresse && errors.adresse.message}
          </small>
      </FormControl>
        </Stack>
        <Stack direction="column" sx={{marginLeft:5}}>
        <InputLabel shrink htmlFor="bootstrap-input">
          Téléphone
        </InputLabel>
        <FormControl >
        <OutlinedInput sx={{height:35}}
        
         onChange={(e) => handle(e)}
         name="telephone"
         id="telephone"
         label="telephone"
         autoComplete="telephone"
         autoFocus
         {...register('telephone', registerOptions.telephone) }
        
         error={!!errors?.telephone}
         helpertext={errors?.telephone ? errors.telephone.message : null}
        />  
         <small className="text-danger">
            {errors?.telephone && errors.telephone.message}
          </small>
      </FormControl>
        </Stack>
      </Stack>
      <Stack direction="row" sx={{marginTop:3}}>
        <Stack direction="column">
        <InputLabel shrink  htmlFor="bootstrap-input">
          Email
        </InputLabel>
        <FormControl >
        <OutlinedInput sx={{height:35}}
         onChange={(e) => handle(e)}
         name="email"
         id="email"
         label="email"
         autoComplete="email"
         autoFocus
         {...register('email', registerOptions.email) }
         error={!!errors?.email}
         helpertext={errors?.email ? errors.email.message : null}
        />  
         <small className="text-danger">
            {errors?.email && errors.email.message}
          </small>
      </FormControl>
        </Stack>
        <Stack direction="column"  sx={{marginLeft:5}}>
        <InputLabel shrink  htmlFor="bootstrap-input">
          CIN
        </InputLabel>
        <FormControl >
        <OutlinedInput sx={{height:35}}
         onChange={(e) => handle(e)}
         name="CIN"
         id="CIN"
         label="CIN"
         autoComplete="CIN"
         autoFocus
         {...register('CIN', registerOptions.CIN) }
         error={!!errors?.CIN}
         helpertext={errors?.CIN ? errors.CIN.message : null}
        />  
         <small className="text-danger">
            {errors?.CIN && errors.CIN.message}
          </small>
      </FormControl>
        </Stack>
        <Stack direction="column"  sx={{marginLeft:5}}>
        <InputLabel shrink  htmlFor="bootstrap-input">
          CNSS
        </InputLabel>
        <FormControl >
        <OutlinedInput sx={{height:35}}
         onChange={(e) => handle(e)}
         name="CNSS"
         id="CNSS"
         label="CNSS"
         autoComplete="CNSS"
         autoFocus
         {...register('CNSS', registerOptions.CNSS) }
         error={!!errors?.CNSS}
         helpertext={errors?.CNSS ? errors.CNSS.message : null}
        />  
         <small className="text-danger">
            {errors?.CNSS && errors.CNSS.message}
          </small>
      </FormControl>
        </Stack>
      </Stack>
      <Stack direction="row" sx={{marginTop:3}}>
      <Stack direction="column">
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Statut Matrimoniel</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="statut_matrimoniel"
      >
        <FormControlLabel value="marie" control={<Radio />} sx={{color:'secondary'}} color="secondary" label="Marié" />
        <FormControlLabel value="celibataire" control={<Radio />} label="Célébataire" />
      </RadioGroup>
    </FormControl>
      </Stack>
    <Stack direction="column"  sx={{marginLeft:7}}>
        <InputLabel shrink  htmlFor="bootstrap-input">
          Nombre enfants
        </InputLabel>
        <FormControl >
        <OutlinedInput sx={{height:35}}
         onChange={(e) => handle(e)}
         name="nombre_enfants"
         id="nombre_enfants"
         label="nombre_enfants"
         autoComplete="nombre_enfants"
         autoFocus
         {...register('nombre_enfants', registerOptions.nombre_enfants) }
         error={!!errors?.nombre_enfants}
         helpertext={errors?.nombre_enfants ? errors.nombre_enfants.message : null}
        />  
         <small className="text-danger">
            {errors?.nombre_enfants && errors.nombre_enfants.message}
          </small>
      </FormControl>
        </Stack>
        </Stack>
  
          {/* <TextField
            required
            onChange={(e) => handle(e)}
            name="prenom"
            id="prenom"
            label="Prenom"
            autoComplete="prenom"
            autoFocus
            // {...register("prenom", {
            //   required: "Champ requise",
            //   pattern: {
            //     message: "Invalid prenom address",
            //   },
            // })}
            error={!!errors?.prenom}
            helperText={errors?.prenom ? errors.prenom.message : null}
          />
          <TextField
          
            // onChange={(e) => handle(e)}
            variant="outlined"
            label="email"
            fullWidth
            autoComplete="email"
            autoFocus
            {...register("email", {
              required: "Required field",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            error={!!errors?.email}
            helperText={errors?.email ? errors.email.message : null}
          />

          <TextField
            onChange={(e) => handle(e)}
            required
            name="telephone"
            id="telephone"
            label="Telephone"
          />
          <TextField
            onChange={(e) => handle(e)}
            required
            name="adresse"
            id="adresse"
            label="Adresse"
          />

          <TextField
            onChange={(e) => handle(e)}
            required
            type="date"
            name="date_naissance"
            id="date_naissance"
            label=""
          />
          <TextField onChange={(e) => handle(e)}
            required
            name="CIN"
            id="CIN"
            label="CIN"
          />
          <TextField
            onChange={(e) => handle(e)}
            required
            name="CNSS"
            id="CNSS"
            label="CNSS"
          />
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="sexe"
          >
            {/* <FormControlLabel
              onChange={(e) => handle(e)}
              value="femme"
              control={<Radio />}
              label="Femme"
            />
            <FormControlLabel
              onChange={(e) => handle(e)}
              value="homme"
              control={<Radio />}
              label="Homme"
            /> 
          </RadioGroup>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="statut_matrimoniel"
          >
            {/* <FormControlLabel
              onChange={(e) => handle(e)}
              value="celibataire"
              control={<Radio />}
              label="Célibataire"
            />
            <FormControlLabel
              onChange={(e) => handle(e)}
              onChange={(e) => handle(e)}
              value="marie"
              control={<Radio />}
              label="Marié"
            /> 
          </RadioGroup>
          <TextField
            onChange={(e) => handle(e)}
            name="nombre_enfants"
            id="nombre_enfants"
            label="Nombre d'enfants"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <p>Contact urgence</p>
          <TextField
            onChange={(e) => handle(e)}
            required
            name="nom_prenom_contact_urgence"
            id="nom_prenom_contact_urgence"
            label="Nom etPrenom"
          />
          <TextField
            onChange={(e) => handle(e)}
            required
            name="telephone_contact_urgence"
            id="telephone_contact_urgence"
            label="Telephone"
          />
          <p>Poste</p>
          <input
            onChange={(e) => handle(e)}
            required
            type="hidden"
            name="employee_id"
            id="employee_id"
            
          />
          <p>date d'entree</p>
           <TextField
            onChange={(e) => handle(e)}
            required
            type="date"
            name="date_entree"
            id="date_entree"
            label=""
          />
           <p>date de sortie</p>
           <TextField
            onChange={(e) => handle(e)}
            required
            type="date"
            name="date_sortie"
            id="date_sortie"
            label=""
          />
           <TextField
            onChange={(e) => handle(e)}
            required
            name="duree"
            id="duree"
            label="Duree"
          />
           <TextField
            onChange={(e) => handle(e)}
            required
            name="salaire"
            id="salaire"
            label="Salaire"
          />
          <InputLabel id="demo-simple-select-label">Type de Contrat</InputLabel>
          <Select
            // labelId="demo-simple-select-label"
            // id="demo-simple-select"
            // value={age}
            sx={{ m: 1, width: 300 }}
            id="type_contrat_id"
            name="type_contrat_id"
            label="Type de contrat"
            onChange={(e) => handle(e)}
          >
            {
             typeContrat.map((typeContrats) => (
                <MenuItem value={typeContrats.id}>
                  {typeContrats.nom_typecontrat}
                </MenuItem>
              ))}
          </Select>
          <InputLabel id="demo-simple-select-label">Departement</InputLabel>
          <Select
            // labelId="demo-simple-select-label"
            // id="demo-simple-select"
            // value={age}
            sx={{ m: 1, width: 300 }}
            id="departement_id"
            name="departement_id"
            label="Departement"
            onChange={(e) => handle(e)}
          >
            {departement.length > 0 &&
              departement.map((departements) => (
                <MenuItem value={departements.id}>
                  {departements.nom_departement}
                </MenuItem>
              ))}
          </Select>
          <InputLabel id="demo-simple-select-label">Fonction</InputLabel>
          <Select
            // labelId="demo-simple-select-label"
            // id="demo-simple-select"
            // value={age}
            sx={{ m: 1, width: 300 }}
            id="fonction_id"
            name="fonction_id"
            label="Fonction"
            onChange={(e) => handle(e)}
          >
            {
              datafonction.map((fonctions) => (
                <MenuItem value={fonctions.id}>
                  {fonctions.nom_fonction}
                </MenuItem>
              ))}
          </Select> */}
        </div>
        <Typography variant="body1" color="text.secondary" gutterBottom sx={{marginTop:5}}>
         Poste
        </Typography>
        <Divider />
        <div className="divform">
        <Stack direction="row" >
        <Stack direction="column" >
        <InputLabel shrink htmlFor="bootstrap-input">
          Departement
        </InputLabel>
        <FormControl sx={{ m: 1, width: 300 }}>

        <Select
        sx={{height:35}}
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          // value={personName}
          // onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          // MenuProps={MenuProps}
        >
          {/* {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))} */}
        </Select>

  
      </FormControl>
        </Stack>
        <Stack direction="column" sx={{marginLeft:15}}>
        <InputLabel shrink htmlFor="bootstrap-input">
          Fonction
        </InputLabel>
        <FormControl sx={{ m: 1, width: 300 }}>

        <Select
        sx={{height:35}}
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          // value={personName}
          // onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          // MenuProps={MenuProps}
        >
          {/* {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))} */}
        </Select>

  
      </FormControl>
        </Stack>
        </Stack>
        <Stack direction="row" sx={{marginTop:2}}>

        <Stack direction="column" >
        <InputLabel shrink htmlFor="bootstrap-input">
          Type de Contrat
        </InputLabel>
        <FormControl sx={{ m: 1, width: 300 }}>

        <Select
        sx={{height:35}}
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          // value={personName}
          // onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          // MenuProps={MenuProps}
        >
          {/* {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))} */}
        </Select>

  
      </FormControl>
        </Stack>
        <Stack direction="column" sx={{marginLeft:15}}>
        <InputLabel shrink htmlFor="bootstrap-input">
         Superieur
        </InputLabel>
        <FormControl sx={{ m: 1, width: 300 }}>

        <Select
        sx={{height:35}}
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          // value={personName}
          // onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          // MenuProps={MenuProps}
        >
          {/* {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))} */}
        </Select>

  
      </FormControl>
        </Stack>
        </Stack>
        <Stack direction="row" sx={{marginTop:2}}>
        <Stack direction="column" sx={{marginLeft:1}}>
        <InputLabel shrink htmlFor="bootstrap-input">
          Salaire
        </InputLabel>
        <FormControl >
        <OutlinedInput sx={{height:35}}
        
         onChange={(e) => handle(e)}
         name="prenom"
         id="prenom"
         label="prenom"
         autoComplete="prenom"
         autoFocus
         {...register('prenom', registerOptions.prenom) }
        
         error={!!errors?.prenom}
         helpertext={errors?.prenom ? errors.prenom.message : null}
        />  
         <small className="text-danger">
            {errors?.prenom && errors.prenom.message}
          </small>
      </FormControl>
        </Stack>
        <Stack direction="column" sx={{marginLeft:10}} >
        <InputLabel shrink htmlFor="bootstrap-input">
          Date de debut
        </InputLabel>
        <FormControl >
        <OutlinedInput sx={{height:35}}
         onChange={(e) => handle(e)}
         name="date_naissance"
         id="date_naissance"
         label="date naissance"
         autoComplete="date_naissance"
         type="date"
         autoFocus
         {...register('date_naissance', registerOptions.date_naissance) }
         error={!!errors?.date_naissance}
         helpertext={errors?.date_naissance ? errors.date_naissance.message : null}
        />  
         <small className="text-danger">
            {errors?.date_naissance && errors.date_naissance.message}
          </small>
      </FormControl>
        </Stack>
        <Stack direction="column" sx={{marginLeft:13}} >
        <InputLabel shrink htmlFor="bootstrap-input">
          Date de fin
        </InputLabel>
        <FormControl >
        <OutlinedInput sx={{height:35}}
         onChange={(e) => handle(e)}
         name="date_naissance"
         id="date_naissance"
         label="date naissance"
         autoComplete="date_naissance"
         type="date"
         autoFocus
         {...register('date_naissance', registerOptions.date_naissance) }
         error={!!errors?.date_naissance}
         helpertext={errors?.date_naissance ? errors.date_naissance.message : null}
        />  
         <small className="text-danger">
            {errors?.date_naissance && errors.date_naissance.message}
          </small>
      </FormControl>
        </Stack>
        </Stack>
        </div>
        <button>Submit</button>
      </Box>
     
    </form>
        // <form onSubmit={(e) => submit(e)}>
    //   <div>
        
    //     <input onChange={(e) => handle(e)} type="text" name="nom" id="nom" placeholder="nom"/>
    //     <input onChange={(e) => handle(e)} type="text" name="prenom" id="prenom" placeholder="prenom"/>
    //     <input onChange={(e) => handle(e)} type="email" name="email" id="email" placeholder="email"
    //     />
    //   </div>

    //   <div>
    //     <input onChange={(e) => handle(e)} value="homme" type="radio" id="sexe" name="sexe"/>
    //     <label for="homme">Homme</label>
    //     <input onChange={(e) => handle(e)} value="femme" type="radio" id="sexe" name="sexe"/>
    //     <label for="femme">Femme</label>
    //   </div>

    //   <div>
    //     <input onChange={(e) => handle(e)} type="text" name="CIN" id="CIN" placeholder="CIN"/>
    //     <input onChange={(e) => handle(e)} type="text" name="CNSS" id="CNSS" placeholder="CNSS"/>
    //   </div>
    //   <div>
    //     <input onChange={(e) => handle(e)} value="celibataire" type="radio" id="statut_matrimoniel" name="statut_matrimoniel"/>
    //     <label for="celibataire">Celibataire</label>
    //     <input onChange={(e) => handle(e)} value= "marie" type="radio" id="statut_matrimoniel" name="statut_matrimoniel"/>
    //     <label for="dewey">Marie</label>
    //   </div>
    //   <div>
    //     <input onChange={(e) => handle(e)} type="number" name="nombre_enfants" id="nombre_enfants" placeholder="nombre_enfants"
    //     />
    //     <input onChange={(e) => handle(e)} type="text" name="telephone" id="telephone" placeholder="telephone"
    //     />
    //   </div>
    //   <div>
    //     <input onChange={(e) => handle(e)} type="text" name="adresse" id="adresse" placeholder="adresse"
    //     />
    //     <input onChange={(e) => handle(e)} type="date" name="date_naissance" id="date_naissance" placeholder="date_naissance"
    //     />
    //   </div>
    //   <div>
    //     <input onChange={(e) => handle(e)} type="text" name="nom_prenom_contact_urgence" id="nom_prenom_contact_urgence" placeholder="nom_prenom_contact_urgence"
    //     />
    //     <input onChange={(e) => handle(e)} type="text" name="telephone_contact_urgence" id="telephone_contact_urgence" placeholder="telephone_contact_urgence"
    //     />
    //   </div>
    //   <div>
    //     <label for="departement_id">Departement:</label>

    //     <select name="departement_id" onChange={(e) => handle(e)} id="departement_id"
    //     > <option>--Please choose an option--</option> {departement.length > 0 && departement.map((departements) =>   <option value={departements.id}>{departements.nom_departement}</option> )}
    //     </select>
    //   </div>
    //   <div>
    //     <label for="fonction_id">Fonction:</label>

    //     <select name="fonction_id" onChange={(e) => handle(e)} id="fonction_id"
    //     > <option value="">--Please choose an option--</option> {datafonction.map((fonctions) => (   <option value={fonctions.id}>{fonctions.nom_fonction}</option> ))}
    //     </select>
    //   </div>
    //   <h1>Contrat</h1>
    //   <div>
    //   <input onChange={(e) => handle(e)} type="hidden" name="employee_id"
    //     />
    //     <input onChange={(e) => handle(e)} type="text" name="duree" id="duree" placeholder="duree"
    //     />
    //     <input onChange={(e) => handle(e)} type="date" name="date_entree" id="date_entree" placeholder="date_entree"
    //     />       <input onChange={(e) => handle(e)} type="date" name="date_sortie" id="date_sortie" placeholder="date_sortie"
    //     />
    //     <input onChange={(e) => handle(e)} type="text" name="salaire" id="salaire" placeholder="salaire"
    //     />
    //   </div>
    //    <div>
    //     <label for="type_contrat_id">type de contrat:</label>

    //     <select name="type_contrat_id" onChange={(e) => handle(e)} id="type_contrat_id"
    //     > <option value="">--Please choose an option--</option> {typeContrat.map((fonctions) => (   <option value={fonctions.id}>{fonctions.nom_typecontrat}</option> ))}
    //     </select>
    //   </div>
    //   <button>Submit</button>
    // </form>
  );
};

export default FormEmploye;
