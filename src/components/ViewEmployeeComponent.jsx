import React, { Component } from 'react';
import EmployeeServices from '../services/EmployeeServices';
import '../styles/style.css';

class ViewEmployeeComponent extends Component {

  constructor(props){
    super(props)
    this.state ={
      id: this.props.match.params.id,
      employee:{}
    }
  }
  componentDidMount(){
    EmployeeServices.getEmployeeById(this.state.id).then( res => {
        this.setState({employee:res.data});
    })

  }
  render() {
    return (
      <div>
        <br></br>
        <div className='card col-md-6 offset-md-3'>
          <h3 className='text-center'> View employee details</h3>
          <div className='card-body'>
            <div className='row'>
              <label>Employee First Name: </label>
              <div>{this.state.employee.firstName}</div>  
            </div>

            <div className='row'>
              <label>Employee Last Name: </label>
              <div>{this.state.employee.lastName}</div>
            </div>

            <div className='row'>
              <label>Employee Email Address: </label>
              <div>{this.state.employee.email}</div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default ViewEmployeeComponent;