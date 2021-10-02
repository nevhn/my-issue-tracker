import axios from 'axios';
import React from 'react';
import './Issue';

export const Issue = ({ issue }) => {
  const handleClick = async () => {
    try {
      const response = await axios.delete('/issues', {
        id: issue._id,
      });
      // console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
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
