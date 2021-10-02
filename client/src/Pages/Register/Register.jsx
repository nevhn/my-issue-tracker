import React, { useState } from 'react';
import axios from 'axios';

export const Register = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post('/auth/register', {
      firstName,
      lastName,
      username,
      password,
    });
    console.log('register:', response.data);
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor=''>
          First Name
          <input
            required
            pattern='\S+.*'
            type='text'
            name=''
            id='firstname'
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label htmlFor=''>
          Last Name
          <input
            required
            pattern='\S+.*'
            type='text'
            name=''
            id='lastname'
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label htmlFor=''>
          Username
          <input
            required
            pattern='\S+'
            type='text'
            name=''
            id='username'
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor=''>
          Password
          <input
            required
            type='password'
            name=''
            id='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};
