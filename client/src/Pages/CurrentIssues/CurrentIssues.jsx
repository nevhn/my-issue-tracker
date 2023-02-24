import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Issue } from "../../Components/Issue";
import axios from "axios";
import { Container, IssueDiv } from "./CurrentIssues.style";
import { H3 } from "../Profile/Profile.style";
import config from "../../config";

const endpoint = config.API_ENDPOINT;

export const CurrentIssues = ({ user }) => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    // const user = user || null;
    const fetchIssues = async () => {
      console.log("endpoint", endpoint);
      try {
        const response = await axios.get(
          // "http://localhost:8080/api/issues"
          `${endpoint}/issues`
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
          <Issue key={issue._id} issue={issue} user={user || null} />
        ))
      ) : (
        <H3>No issues tracked</H3>
      )}
    </Container>
  );
};
