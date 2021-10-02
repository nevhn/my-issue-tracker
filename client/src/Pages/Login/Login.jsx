import axios from 'axios';
import React, { useState } from 'react';

export const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('/auth/login', {
      username,
      password,
    });
    if (response.data.status === 'ok') {
      localStorage.setItem('token', response.data.data);
      alert('login successful');
      window.location.replace('/profile');
    }
    console.log('login response', response.data);
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor=''>
          username
          <input
            type='text'
            name='username'
            id='username'
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label htmlFor=''>
          password
          <input
            type='password'
            name='password'
            id='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type='submit'>login</button>
      </form>
    </div>
  );
};
