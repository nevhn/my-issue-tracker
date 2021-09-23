import axios from 'axios';
import React, { useState } from 'react';

export const AddIssue = () => {
  const [description, setDescription] = useState('');
  const [assignedTo, setAssigned] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = async () => {
    try {
      const body = {
        description,
        assignedTo,
        priority,
        // add date
      };
      const response = await axios.post('/add');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          <span>Description</span>
          <input
            type='text'
            name=''
            id=''
            placeholder='Description of issue...'
          />
        </label>
        <label>
          <span>Assign to</span>
          <select name='dev' id='dev'>
            {/* fetch users from another endpoint */}
            <option value='' disabled selected></option>
            <option value='Person 1'> Person 1</option>
            <option value='Person 2'> Person 2</option>
            <option value='Person 3'>Person 3</option>
          </select>
        </label>
        <label>
          <span>Priority</span>
          <select name='priority' id='priority'>
            <option value='Low'> Low</option>
            <option value='Medium'> Medium</option>
            <option value='High'>High</option>
          </select>
        </label>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};
