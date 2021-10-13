import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Issue } from '../../Components/Issue';
import axios from 'axios';
import { Container, IssueDiv } from './CurrentIssues.style';
import { H3 } from '../Profile/Profile.style';

export const CurrentIssues = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get('/issues');
        setIssues(response.data);
        // console.log('search: ', search);
      } catch (error) {
        console.error(error);
      }
    };

    fetchIssues();
  }, []);

  console.log('length:', issues.length);
  return (
    <Container>
      {issues.length ? (
        issues.map((issue) => <Issue key={issue._id} issue={issue} />)
      ) : (
        <H3>No issues tracked</H3>
      )}
    </Container>
  );
};
