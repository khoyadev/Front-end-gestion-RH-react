import axios from "axios";

// const BASE_URL = 'http://127.0.0.1:8000/api/';
export default {
    BASE_URL : 'http://127.0.0.1:8000/api/',
   async getAllDepartments () {
      return 
      await axios
      .get("http://127.0.0.1:8000/api/employees")
      .then((res) => res.data)
      .catch(error => {
         console.log(error);
      })
    }
}