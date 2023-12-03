import axios from 'axios'
import React, { Component } from 'react'
import './employee.css'
import View from './View'
export default class Employee extends Component {

  state = {
    employees: []
  }

  getEmployees = async () => {
    await axios.get("http://localhost:3004/api/emp/employees")
      .then(response => {
        console.log(response.data);
        const { status, employees } = response.data;
  
        if (status === 'true') {
          this.setState({ employees });
        } else {
          console.error(response.data.message);
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }
  
  
  componentDidMount() {
    this.getEmployees();
  }

  viewClick = () => {
    // navigate('./View');
  }

  render() {
    return (
      <div className='container'>
        <h2>Employee List</h2>
        
          <div className='emp-div'>
            <table className='emp-table'>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>

              {this.state.employees.map((employee, index) => (
              <tbody>
                <tr key={index}>
                  <td>{employee.first_name}</td>
                  <td>{employee.last_name}</td>
                  <td>{employee.email}</td>
                  <td className='action-btns'>
                    <button className='viewBtn' value={employee._id} onClick={this.viewClick}>View</button>
                    <button className='upBtn' value={employee._id}>Update</button>
                    <button className='delBtn' value={employee._id}>Delete</button>
                  </td>
                </tr>
              </tbody>
              ))}
            </table>
          </div>
        
      </div>
    );
  }
  
  
}
