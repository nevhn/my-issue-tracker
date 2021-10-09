import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Profile = ({ user }) => {
  // const [user, setUser] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    // if (localStorage.token === 'null') {
    // setUser(null);
    // } else {
    // const payload = localStorage.token.split('.')[1];
    // const token = JSON.parse(atob(payload));
    const fetchUser = async () => {
      try {
        const response = await axios(`/users/${user.id}`);
        console.log('fetchUser:', response);
        setUserInfo(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchIssues = async () => {
      try {
        const response = await axios.get(`/issues/${user.username}`);
        console.log('fetchIssues:', response);
        setIssues(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
    fetchIssues();
  }, []);

  console.log(user);

  return (
    <div>
      {user ? (
        <>
          <h3>Welcome {userInfo.firstName + ' ' + userInfo.lastName}</h3>
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
        </>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
};
