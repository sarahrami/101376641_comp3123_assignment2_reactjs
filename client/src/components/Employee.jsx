import axios from "axios";
import React, { Component } from "react";
import "./css/employee.css";

import { Link } from "react-router-dom";
export default class Employee extends Component {
  state = {
    employees: [],
  };

  getEmployees = async () => {
    await axios
      .get("http://localhost:3004/api/emp/employees")
      .then((response) => {
        console.log(response.data);
        const { status, employees } = response.data;

        if (status === "true") {
          this.setState({ employees });
        } else {
          console.error(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  componentDidMount() {
    this.getEmployees();
  }

  deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:3004/api/emp/employees/${id}`);
      this.setState((prev) => ({
        employees: prev.employees.filter((employee) => employee._id !== id),
      }));
    } catch (error) {
      console.error(error.message);
    }
  };


  render() {
    return (
      <div>
         <Link to="/">
          <button
            style={{
              backgroundColor: "#5D76A9",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              borderColor: 'white',
              fontSize: "1rem",
              margin: "1rem",
              float: "right",
            }}
          >
            Logout
          </button>
        </Link>
      <div className="container">
        <h2>Employee List</h2>

        <div className="emp-div">
        <Link to="/add">
          <button style={{
            backgroundColor: "#007791", 
            color: "white", padding: "10px", borderRadius: "5px", fontSize: "1rem",
            margin:"1rem", float:"right" }}>
            Add Employee
            </button>
        </Link>

          <table className="emp-table">
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
                  <td className="action-btns">
                    <Link to={`/view/${employee._id}`}>
                      <button
                        className="viewBtn"
                        value={employee._id}
                        onClick={this.viewClick}
                        style={{width: "5rem", fontSize: "1rem"}}>
                        View
                      </button>
                    </Link>
                    <Link to={`/update/${employee._id}`}>
                      <button className="upBtn" style={{width: "5rem", fontSize: "1rem"}}>
                        Update
                      </button>
                    </Link>
                    <button onClick={() => this.deleteEmployee(employee._id)} className="delBtn" 
                    style={{ width: "5rem", fontSize: "1rem"}}>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
    );
  }
}
