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
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }
  updateEmployee(id){
    this.props.history.push(`/update-employee/${id}`);
  }
  viewEmployee(id){
    this.props.history.push(`/view-employee/${id}`);
  }
  componentDidMount(){
    EmployeeServices.getEmployees().then((res)=>{
      this.setState({employees: res.data});
    });
  }
  addEmployee(){
    this.props.history.push('/add-employee');
  }
  deleteEmployee(id){
    EmployeeServices.deleteEmployee(id).then( res=> {
      this.setState({ employees: this.state.employees.filter(employee=> employee.id !== id)});
    });
  }
  render(){
    return(
      <div>
        <h2 className="text-center">Employees List</h2>
        <div className="row">
          <button className="btn btn-primary" style={{width: "250px", marginLeft:"535px"}} onClick={this.addEmployee}>Add Employee</button>
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
                      <button onClick={()=> this.updateEmployee(employee.id)} className="btn btn-info">Update info</button>
                      <button style={{marginLeft:"50px"}} onClick={()=> this.viewEmployee(employee.id)} className="btn btn-info">View employee</button>
                      <button style={{marginLeft: "50px"}} onClick={()=> this.deleteEmployee(employee.id)} className="btn btn-danger">delete employee</button>
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