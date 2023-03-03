import React, { Component } from "react";

class ListEmployeeComponents extends Component{
  constructor(props){
    super(props)
    this.state={
      employees:[]
    }
  }
  render(){
    return(
      <div>
        <h2 className="text-center">List Employee</h2>

      </div>
    );
  }
}
export default ListEmployeeComponents;