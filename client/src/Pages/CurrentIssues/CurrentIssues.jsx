import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Issue } from "../../Components/Issue";
import axios from "axios";
import { Container, IssueDiv } from "./CurrentIssues.style";
import { H3 } from "../Profile/Profile.style";

export const CurrentIssues = ({ user }) => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get(
          // 'https://my-issue-tracker-v1.herokuapp.com/api/issues'
          "http://localhost:8080/api/issues"
        );
        setIssues(response.data);
        // console.log('search: ', search);
      } catch (error) {
        console.error(error);
      }
    };

    fetchIssues();
  }, []);

  console.log("length:", issues.length);
  return (
    <Container>
      {issues.length ? (
        issues.map((issue) => (
          <Issue key={issue._id} issue={issue} user={user} />
        ))
      ) : (
        <H3>No issues tracked</H3>
      )}
    </Container>
  );
};
