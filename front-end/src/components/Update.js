import React, { useState } from 'react';
import axios from 'axios';
import './employee.css'

export default function Add() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const updateEmployee = async (id) => {
    try {
      setLoading(true);
      const response = await axios.put(`http://localhost:3004/api/emp/employees/{$id}`, 
        { first_name: firstname, last_name: lastname, email, salary });

      if (response.data.status === "true") {
        setError(response.data.message);
      } else {
        setError(response.data.message);
      }

    } catch (error) {
      console.error(error.response);
      setError("Failed to update employee");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <form>
        <legend>Update Employee</legend>

        <div className="form-group">
          <label>First Name</label>
          <input type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Salary</label>
          <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} />
        </div>
        <p className='error'>{error}</p>

        <div className='btns'>
          <button className='upBtn'  disabled={loading}>Save</button>
          <button className='cancelBtn'  disabled={loading}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
