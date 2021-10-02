import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Profile = () => {
  const [user, setUser] = useState({});
  const [issues, setIssues] = useState([]);

  const handleLogout = () => {
    localStorage.setItem('token', null);
    window.location.replace('/');
  };

  useEffect(() => {
    if (localStorage.token === 'null') {
      setUser(null);
    } else {
      const payload = localStorage.token.split('.')[1];
      const token = JSON.parse(atob(payload));
      const fetchUser = async () => {
        try {
          const response = await axios(`/users/${token.id}`);
          console.log('fetchUser:', response);
          setUser(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      const fetchIssues = async () => {
        try {
          const response = await axios.get(`/issues/${token.username}`);
          console.log('fetchIssues:', response);
          setIssues(response.data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchUser();
      fetchIssues();
    }
  }, []);

  console.log(user);

  return (
    <div>
      {user ? (
        <>
          <h3>Welcome {user.firstName + ' ' + user.lastName}</h3>
          <p>{user.username}</p>
          {/* <img>Picture</img> */}
          <p>Issues assigned to you:</p>
          <div>
            {issues.map((item) => (
              <p>
                description: <span>{item.description}</span> priority:
                <span>{item.priority}</span>
              </p>
            ))}
          </div>
          <button onClick={() => handleLogout()}>logout</button>
        </>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
};
