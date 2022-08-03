import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api";
export default {
  async getAllDepartments() {
    return await fetch(`${BASE_URL}/departements`)
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  async getAllDepartmentsBis() {
    return await axios.get(`${BASE_URL}/departements`)
      .then((response) => {
         console.log(response);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};