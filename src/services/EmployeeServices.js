import axios, { Axios } from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees"
class Employeeservice{
  getEmployees(){
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  createEmployee(employee){
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }
  getEmployeeById(employeeId){
    return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
  }

}
export default new Employeeservice();