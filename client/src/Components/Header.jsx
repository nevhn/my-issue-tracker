import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const [isUser, setIsUser] = useState(null);
  const [token, setToken] = useState();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (localStorage.token != 'null') {
      const payload = localStorage.token.split('.')[1];
      const token = JSON.parse(atob(payload));
      setToken(token);
      setIsUser(true);
    }
  }, []);

  const handleLogout = () => {
    console.log('logged out');
    localStorage.setItem('token', null);
    // window.location.replace('/');
  };

  console.log(isUser);
  return (
    <div>
      <h1>Issue Tracker </h1>
      <ul>
        {isUser && path != '/profile' ? (
          <li>
            <Link to='/profile'>{token.username}</Link>
          </li>
        ) : (
          <li>
            {' '}
            <Link to='/login'>LOGIN</Link>{' '}
          </li>
        )}

        <li>
          <Link to='/add'>ADD ISSUE</Link>
        </li>
        <li>
          <Link to='/'>CURRENT ISSUES</Link>
        </li>
        {isUser ? <li onClick={() => handleLogout()}>LOGOUT</li> : null}
      </ul>
    </div>
  );
};
