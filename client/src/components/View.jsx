import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/employee.css'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function View() {

  const { id } = useParams(); 
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getInfo = async () => {
    try {
        const response = await axios.get(`http://localhost:3004/api/emp/employees/${id}`);
        const employeeData = response.data;
  
        setFirstName(employeeData.first_name);
        setLastName(employeeData.last_name);
        setEmail(employeeData.email);
        setSalary(employeeData.salary);
      } catch (error) {
        console.error(error.response);
        setError("Failed to fetch employee information");
      }
  }
  

  useEffect(() => {
    getInfo();
  }, [id]);

  return (
    <div className="form-container" style={{height: '270px'}}>
      <form>
        <legend>View Employee</legend>

        <p className="emp-info">First Name: {firstname}</p>
        <p className="emp-info">Last Name: {lastname}</p>
        <p className="emp-info">Email: {email}</p>
        <p className="emp-info">Salary: {salary}</p>

        <div className='btns'>
            <Link to={"/employee"}>
             <button style={{float: 'right'}} className='cancelBtn'  disabled={loading}>Back</button>
             </Link>
        </div>
      </form>
    </div>
    
  )
}
