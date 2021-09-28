import React from 'react';
import { Link } from 'react-router-dom';
import '../Components/Issue';
import { Issue } from '../Components/Issue';

export const CurrentIssues = ({ issues }) => {
  return (
    <div>
      {issues.map((issue) => (
        <Issue key={issue._id} issue={issue} />
      ))}
      <Link to='/add'>
        <button>Add issue</button>
      </Link>
    </div>
  );
};
