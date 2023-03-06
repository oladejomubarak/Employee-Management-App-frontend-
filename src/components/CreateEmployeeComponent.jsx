import React, { Component } from 'react';

class CreateEmployeeComponent extends Component {
  constructor(props){
    super(props)
    this.state={
      firstName:'',
      lastName:'',
      email:''
    }
  }

  changeFirstNameHandler=(event)=>{
    this.setState=({firstName: event.target.value});
  }


  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h3 className='text-center'>Add employee</h3>
            <div className='card-body'>
            <form>
              <div className='form-group'>
                <label>First Name: </label>
                <input placeholder='First Name' name='firstName' 
                className='form-control'  value={this.state.firstName} 
                onChange={this.changeFirstNameHandler}/>
              </div>
            </form>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default CreateEmployeeComponent;