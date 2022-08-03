import axios from "axios";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { Avatar, Button, Card, CardContent, Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PersonIcon from "@mui/icons-material/Person";

const TypesDetails = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { id } = useParams();
  const base_url = "http://127.0.0.1:8000/api/";

  const [employee, setEmployee] = useState({});
  const [departement, setDepartement] = useState({});
  const [fonction, setFonction] = useState({});
  const [contrat, setContrat] = useState([]);
  const [typecontrat, setTypecontrat] = useState({});
  const [idContrat, setIdContrat] = useState("");

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

      const getContrat = await axios.get(
        `${base_url}contrats/employee/${getEmployee.data.id}`
      );
        
      setContrat(getContrat.data);

    }
    getAllData();
  }, [id]);
  
  contrat.forEach((contrats)=>{
       console.log(contrats.type_contrat.nom_typecontrat);
  })
  // requete pour recuperer le type de contrat
  // useEffect(() => {
  //   contrat.forEach((contrats)=>{
  //     console.log(contrats.id);
  //     console.log(contrats.type_contrat_id);
  //   axios.get(
  //     `${base_url}typeContrats/${contrats.type_contrat_id}`
  //   ).then((res) => setTypecontrat(res.data));

  // })
  // }, [contrat]);
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: 1000 }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Information de l'employee" value="1" />
            <Tab label="Information contrat" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className="card">
            <Card sx={{ minWidth: 375 }}>
              <CardContent key={employee.id}>
                <Typography align="center" sx={{ fontSize: 14, padding: 2 }} gutterBottom>
                  <Avatar align="center" sx={{ marginLeft: 15, width:75, height:75 }}>
                    <PersonIcon />
                  </Avatar>
                  {employee.nom} {employee.prenom}
                </Typography>
                <Divider />
                <Stack direction="row" spacing={15}>
                  <Typography sx={{ fontSize: 12, padding: 1 }} gutterBottom>Email</Typography>
                  <Typography sx={{ fontSize: 12, padding: 1 }} >{employee.email}</Typography>
                </Stack>
                <Divider />
                <Stack direction="row" spacing={11}>
                  <Typography sx={{ fontSize: 12, padding: 1 }} gutterBottom>Téléphone</Typography>
                  <Typography sx={{ fontSize: 12, padding: 1 }} >{employee.telephone}</Typography>
                </Stack>
                <Divider />
                <Stack direction="row" spacing={13}>
                  <Typography sx={{ fontSize: 12, padding: 1 }} gutterBottom>Adresse</Typography>
                  <Typography sx={{ fontSize: 12, padding: 1 }} >{employee.adresse}</Typography>
                </Stack>
                <Divider />
                <Stack direction="row" spacing={3}>
                  <Typography sx={{ fontSize: 12, padding: 1 }} gutterBottom>Numero Carte d'Identité</Typography>
                  <Typography sx={{ fontSize: 12, padding: 1 }} >{employee.CIN}</Typography>
                </Stack>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 375 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14, padding: 2 }} color="text.secondary" gutterBottom>
                  Autres informations
                </Typography>
                <Divider />
                <Stack direction="row" spacing={5}>
                  <Typography sx={{ fontSize: 12, padding: 1 }} gutterBottom>Numero de Sécurité Sociale</Typography>
                  <Typography sx={{ fontSize: 12, padding: 1 }} >{employee.CNSS}</Typography>
                </Stack>
                <Divider />
                <Stack direction="row" spacing={12}>
                  <Typography sx={{ fontSize: 12, padding: 1 }} gutterBottom>Statut matrimoniel</Typography>
                  <Typography sx={{ fontSize: 12, padding: 1 }} >{employee.statut_matrimoniel}</Typography>
                </Stack>
                <Divider />
                <Stack direction="row" spacing={12}>
                  <Typography sx={{ fontSize: 12, padding: 1 }} gutterBottom>Nombre d'enfants</Typography>
                  <Typography sx={{ fontSize: 12, padding: 1 }} >{employee.nombre_enfants}</Typography>
                </Stack>
                <Divider />
                <Stack direction="row" spacing={12}>
                  <Typography sx={{ fontSize: 12, padding: 1 }} gutterBottom>Date de naissance</Typography>
                  <Typography sx={{ fontSize: 12, padding: 1 }} >{employee.date_naissance}</Typography>
                </Stack>

              </CardContent>
            </Card>

          </div>
          <div className="card">
          <Card sx={{ minWidth: 375, marginTop:3}}>
              <CardContent>
                <Typography sx={{ fontSize: 14, padding: 2 }} color="text.secondary" gutterBottom>
                  Contact en cas d'urgence
                </Typography>
                <Divider />
                <Stack direction="row" spacing={5}>
                  <Typography sx={{ fontSize: 12, padding: 1 }} gutterBottom>Nom et Prenom</Typography>
                  <Typography sx={{ fontSize: 12, padding: 1 }} >{employee.nom_prenom_contact_urgence}</Typography>
                </Stack>
                <Divider />
                <Stack direction="row" spacing={12}>
                  <Typography sx={{ fontSize: 12, padding: 1 }} gutterBottom>Téléphone</Typography>
                  <Typography sx={{ fontSize: 12, padding: 1 }} >{employee.telephone_contact_urgence}</Typography>
                </Stack>
                
              </CardContent>
            </Card> 
            <Stack sx={{height:50, marginTop:10, marginLeft:10}} direction="row" spacing={2}>

      <Button variant="contained"  color="success" href="/edit">
        Modifier
      </Button>
      <Button  variant="contained" href="/Liste">
        Retour
      </Button>
            </Stack>
            </div>
        </TabPanel>
        <TabPanel value="2">
        <div className="card">
            <Card sx={{ minWidth: 375 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14, padding: 2 }}  color="text.secondary" gutterBottom>
                  Contrat
                </Typography>
                <Divider />
                <Stack direction="row" spacing={15}>
                  <Typography sx={{ fontSize: 12, padding: 1 }} gutterBottom>Departement</Typography>
                  <Typography sx={{ fontSize: 12, padding: 1 }} >{departement.nom_departement}</Typography>
                </Stack>
                <Divider />
                <Stack direction="row" spacing={11}>
                  <Typography sx={{ fontSize: 12, padding: 1 }} gutterBottom>Fonction</Typography>
                  <Typography sx={{ fontSize: 12, padding: 1 }} >{fonction.nom_fonction}</Typography>
                </Stack>
                <Divider />
                <Stack direction="row" spacing={13}>
                  <Typography sx={{ fontSize: 12, padding: 1 }} gutterBottom>Salaire</Typography>
                  {contrat.map((contrats)=>
                    <Typography sx={{ fontSize: 12, padding: 1 }} >{contrats.salaire}</Typography>
                  )}
                </Stack>
                <Divider />
                <Stack direction="row" spacing={13}>
                  <Typography sx={{ fontSize: 12, padding: 1 }} gutterBottom>Date de debut</Typography>
                  {contrat.map((contrats)=>
                    <Typography sx={{ fontSize: 12, padding: 1 }} >{contrats.date_entree}</Typography>
                  )}
                </Stack>
                <Divider />
                <Stack direction="row" spacing={13}>
                  <Typography sx={{ fontSize: 12, padding: 1 }} gutterBottom>Date de fin</Typography>
                  {contrat.map((contrats)=>
                    <Typography sx={{ fontSize: 12, padding: 1 }} >{contrats.date_sortie}</Typography>
                  )}
                </Stack>
                <Divider />
                <Stack direction="row" spacing={3}>
                  <Typography sx={{ fontSize: 12, padding: 1 }} gutterBottom>Type de contrat</Typography>
                  {contrat.map((contrats)=>
                    <Typography sx={{ fontSize: 12, padding: 1 }} >{contrats.type_contrat.nom_typecontrat}</Typography>
                  )}
                  
                </Stack>
              </CardContent>
            </Card>
            <Stack sx={{height:50, marginTop:10, marginLeft:10}} direction="row" spacing={2}>

            <Button variant="contained"  color="success" href="/edit">
              Modifier
            </Button>
            <Button  variant="contained" href="/Liste">
              Retour
            </Button>
      </Stack>

          </div>
        </TabPanel>
      </TabContext>
    </Box>
    
  );
};


export default TypesDetails;
