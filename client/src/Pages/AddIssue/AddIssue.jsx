import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const AddIssue = () => {
  const [description, setDescription] = useState('');
  const [assignedTo, setAssigned] = useState(null);
  const [priority, setPriority] = useState('low');
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios('/users');
        console.log('response', response.data);
        const uniqueDevs = [
          ...new Set(response.data.map((item) => item.username)),
        ];
        setDevs(uniqueDevs);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        description,
        assignedTo,
        priority,
      };
      const response = await axios.post('/issues/add', body);
      alert(`Issue assigned to ${assignedTo}`);
      console.log(response.status);
    } catch (error) {
      console.error(error);
    }
  };

  // console.log('devs: ', devs);
  // console.log(description);
  // console.log(assignedTo);
  // console.log(priority);
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          <span>Description</span>
          <input
            type='text'
            name=''
            id=''
            placeholder='Description of issue...'
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          <span>Assign to</span>
          <select
            required
            name='dev'
            id='dev'
            onChange={(e) => setAssigned(e.target.value)}
            defaultValue=''
          >
            <option value='' disabled></option>
            {devs.map((dev) => (
              <option value={dev}>{dev}</option>
            ))}
            {/* fetch users from another endpoint */}
            {/*
            <option value='person 1'>Person 1</option>
            <option value='person 2'>Person 2</option>
            <option value='person 3'>Person 3</option> */}
          </select>
        </label>
        <label>
          <span>Priority</span>
          <select
            name='priority'
            id='priority'
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
          </select>
        </label>
        <button type='submit'>Add</button>
      </form>
      <Link to='/'>
        <button> Current issues</button>
      </Link>
    </div>
  );
};
