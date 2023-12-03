import React, { Component } from 'react'
import axios from 'axios'
export default class View extends Component {
    state = {
        employee: []
      }

    getEmployee = async (id) => {
        await axios.get(`http://localhost:3004/api/emp/employees/${id}`)
          .then(response => {
            console.log(response.data);
            const { status, employee } = response.data;
      
            if (status === 'true') {
              this.setState({ employee });
            } else {
              console.error(response.data.message);
            }
          })
          .catch(error => {
            console.error(error.message);
          });
      }

  render() {
    return (
      <div>
        <h4>Employee Information</h4>
        {this.state.employee.map((info, index) => (
            <div key={index}>
                <p>First Name</p> <span>{info.first_name}</span>
                <p>Last Name</p> <span>{info.last_name}</span>
                <p>Email</p> <span>{info.email}</span>
            </div>
        ))}
      </div>
    )
  }
}
