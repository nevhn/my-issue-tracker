import React from 'react';
import './Issue';
export const Issue = ({ issue }) => {
  return (
    <div>
      <div className='issue-table'>
        <button>Close issue</button>
        <p>
          Priority <span>{issue.priority}</span>
        </p>
        <p>
          Assigned To: <span>{issue.assignedTo}</span>
        </p>
        <p>
          Description
          <span>{issue.description}</span>
        </p>
      </div>
      <p>
        Updated <span>{new Date(issue.createdAt).toLocaleString()}</span>
      </p>
    </div>
  );
};
