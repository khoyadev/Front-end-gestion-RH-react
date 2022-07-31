import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function DataTableEmployees() {
  const [data, setData] = useState([]);
  // le useEffect se joue lorsque le composant est monte
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/employees")
      .then((res) => setData(res.data));
  }, []);

  const setID = (id) => {
    console.log(id);
    localStorage.setItem("ID", id);
  };
  const handleDelete = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/employees/${id}`);
    var newstudent = data.filter((item) => {
      // console.log(item);
      return item.id !== id;
    });
    setData(newstudent);
  };
  return (
    <TableContainer component={Paper} sx={{ margin: 10 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell align="left">Prenom</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Telephone</TableCell>
            <TableCell align="left">Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((employee) => (
            <TableRow
              key={employee.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {employee.nom}
              </TableCell>
              <TableCell align="left">{employee.prenom}</TableCell>
              <TableCell align="left">{employee.email}</TableCell>
              <TableCell align="left">{employee.telephone}</TableCell>
              <TableCell align="left">
                {" "}
                <Stack direction="row">
                  <Link to={"/details/" + employee.id}>
                    <IconButton aria-label="details">
                      <VisibilityIcon sx={{ color: "green" }} />
                    </IconButton>
                  </Link>
                  <Link to={"/edit/" + employee.id} underline="none">
                    <Button onClick={() => setID(employee.id)} variant="text">
                      modifier
                    </Button>
                  </Link>
                  <IconButton
                    onClick={() => handleDelete(employee.id)}
                    aria-label="delete"
                  >
                    <DeleteIcon sx={{ color: "red" }} />
                  </IconButton>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
