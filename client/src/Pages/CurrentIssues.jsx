import React from 'react';
import './CurrentIssues';
export const CurrentIssues = () => {
  return (
    <div>
      <div className='issue-table'>
        <button>Close issue</button>
        <p>
          Priority <span>High</span>
        </p>
        <p>
          Username <span>Chris</span>
        </p>
        <p>
          Description
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            aperiam debitis, ullam sed earum repellat ipsum at voluptatem
            corrupti mollitia, excepturi quia cumque aliquam? Beatae natus velit
            quia omnis nam
          </span>
        </p>
      </div>
      <p>
        Updated <span>{new Date().toLocaleString()}</span>
      </p>
    </div>
  );
};
