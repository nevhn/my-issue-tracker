import axios from "axios";
import React from "react";
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
} from "./Issue.style";

import config from "../config";

const endpoint = config.API_ENDPOINT;

export const Issue = ({ issue, user }) => {
  /**When user logs out, the user object will be null */
  let isUser = null;
  if (user) {
    isUser = user.username;
    // console.log("isUser:", user);
  }
  const handleClick = async () => {
    try {
      // console.log("you clicked:", issue._id);
      // console.log(user.username);
      if (issue.assignedTo === user.username) {
        const response = await axios.delete(
          // `http://localhost:8080/api/issues/delete/`,
          `${endpoint}/issues/delete`,
          { data: { id: issue._id } }
        );
      }
      // console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };
  return (
    // <Container onClick={() => console.log(issue)}>
    <Container>
      {isUser === issue.assignedTo ? (
        <CloseButton onClick={() => handleClick()}>Close issue</CloseButton>
      ) : null}
      <PriorityTag>
        Priority{" "}
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
