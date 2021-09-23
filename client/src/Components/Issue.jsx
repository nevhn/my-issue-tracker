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
          Username <span>{issue.assignedTo}</span>
        </p>
        <p>
          Description
          <span>{issue.description}</span>
        </p>
      </div>
      <p>
        Updated <span>{new Date().toLocaleString()}</span>
      </p>
    </div>
  );
};
