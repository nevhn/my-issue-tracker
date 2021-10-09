import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Issue } from '../../Components/Issue';
import axios from 'axios';
import { Container, IssueDiv } from './CurrentIssues.style';

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

  return (
    <Container>
      {issues.map((issue) => (
        <Issue key={issue._id} issue={issue} />
      ))}
    </Container>
  );
};
