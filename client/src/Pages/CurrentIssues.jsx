import React from 'react';
import '../Components/Issue';
import { Issue } from '../Components/Issue';

export const CurrentIssues = ({ issues }) => {
  return (
    <div>
      {issues.map((issue) => (
        <Issue key={issue._id} issue={issue} />
      ))}
    </div>
  );
};
