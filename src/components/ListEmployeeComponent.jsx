import React, { Component } from "react";
import EmployeeServices from "../services/EmployeeServices";

class ListEmployeeComponents extends Component{
  constructor(props){
    super(props)
    this.state={
      employees:[]
    }
    this.addEmployee = this.addEmployee.bind(this);
    this.updateEmployee=this.updateEmployee.bind(this);
  }
  updateEmployee(id){
    this.props.history.push(`update-employee/${id}`);
  }
  componentDidMount(){
    EmployeeServices.getEmployees().then((res)=>{
      this.setState({employees: res.data});
    });
  }
  addEmployee(){
    this.props.history.push('/add-employee');
  }
  render(){
    return(
      <div>
        <h2 className="text-center">Employees List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
        </div>
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
                    <td>
                      <button onClick={()=> this.updateEmployee(employee.id)} className="btn btn-info">Update Info</button>
                    </td>
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