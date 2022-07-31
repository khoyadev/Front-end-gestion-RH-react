import React, { Component } from 'react'
import ajax from './ajax';

export default class Test extends Component {
  state = {
    departements: []
  };
   async componentDidMount() {
    const departements = await ajax.getAllDepartments();
    this.setState({ departements });
   }
  render() {
    let  departements = this.state.departements;
    return (
  
        <h1>Test</h1>
        
    );
  }
}
