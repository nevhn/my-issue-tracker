import axios from 'axios';
import React from 'react';
import './Issue';
export const Issue = ({ issue }) => {
  console.log(issue);
  const handleClick = async () => {
    const response = await axios.delete('/issues', {
      id: issue._id,
    });
    console.log(response.data);
  };
  return (
    <div>
      <div className='issue-table'>
        <button onClick={() => handleClick()}>Close issue</button>
        <p>
          Priority: <span>{issue.priority}</span>
        </p>
        <p>
          Assigned To: <span>{issue.assignedTo}</span>
        </p>
        <p>
          Description:
          <span>{issue.description}</span>
        </p>
      </div>
      <p>
        Updated <span>{new Date(issue.createdAt).toLocaleString()}</span>
      </p>
    </div>
  );
};
