import axios from 'axios';
import React from 'react';
import {
  Container,
  CloseButton,
  PriorityTag,
  PrioritySpan,
  AssignedToTag,
  AssignedToSpan,
  DescriptionSpan,
  DescriptionTag,
  DateTag,
  DateSpan,
} from './Issue.style';

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
    <Container>
      <CloseButton onClick={() => handleClick()}>Close issue</CloseButton>
      <PriorityTag>
        Priority{' '}
        <PrioritySpan $level={issue.priority}>{issue.priority}</PrioritySpan>
      </PriorityTag>
      <AssignedToTag>
        Assigned <AssignedToSpan>{issue.assignedTo}</AssignedToSpan>
      </AssignedToTag>
      <DescriptionTag>
        Description
        <DescriptionSpan>{issue.description}</DescriptionSpan>
      </DescriptionTag>
      <DateTag>
        Submitted
        <DateSpan>{new Date(issue.createdAt).toLocaleString()}</DateSpan>
      </DateTag>
    </Container>
  );
};
