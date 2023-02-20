import axios from "axios";
import React, { useEffect, useState } from "react";
import { Issue } from "../../Components/Issue";
import {
  Container,
  Header,
  H1,
  H2,
  H3,
  IssueDiv,
  H1Span,
} from "./Profile.style";
export const Profile = ({ user }) => {
  // const [user, setUser] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    // if (localStorage.token === 'null') {
    // setUser(null);
    // } else {
    // const payload = localStorage.token.split('.')[1];
    // const token = JSON.parse(atob(payload));
    const fetchUser = async () => {
      try {
        const response = await axios(
          // `https://my-issue-tracker-v1.herokuapp.com/api/users/${user.id}`
          `http://localhost:8080/api/users/${user.id}`
        );
        console.log("fetchUser:", response);
        setUserInfo(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchIssues = async () => {
      try {
        const response = await axios.get(
          // `https://my-issue-tracker-v1.herokuapp.com/api/issues/${user.username}`
          `http://localhost:8080/api/issues/${user.username}`
        );
        console.log("fetchIssues:", response);
        setIssues(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
    fetchIssues();
  }, []);

  console.log(user);
  console.log("issues", issues);

  return (
    <Container>
      <Header>
        <H1>
          <H1Span>Welcome</H1Span>,
          {` ${userInfo.firstName} ${userInfo.lastName}`}
        </H1>
        <H2>Issues assigned to you</H2>
      </Header>

      {user && issues.length ? (
        <IssueDiv>
          {issues.map((item) => (
            <Issue key={item._id} issue={item} />
          ))}
          {/* <div>
            {issues.map((item) => (
              <p>
              description: <span>{item.description}</span> priority:
              <span>{item.priority}</span>
              </p>
              ))}
            </div> */}
        </IssueDiv>
      ) : user && issues.length === 0 ? (
        <H3>No assigned issues.</H3>
      ) : (
        <p>Please login</p>
      )}
    </Container>
  );
};
