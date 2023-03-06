import React, { Component } from "react";
import EmployeeServices from "../services/EmployeeServices";

class ListEmployeeComponents extends Component{
  constructor(props){
    super(props)
    this.state={
      employees:[]
    }
  }
  componentDidMount(){
    EmployeeServices.getEmployees().then((res)=>{
      this.setState({employees: res.data});
    });
  }
  render(){
    return(
      <div>
        <h2 className="text-center">Employees List</h2>
        <div></div>
        <div className="row">
          <table className="table table-striped table-ordered">
            <thead>
              <tr>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.employees.map(
                  employee =>
                  <tr key= {employee.id}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>

      </div>
    );
  }
}
export default ListEmployeeComponents;