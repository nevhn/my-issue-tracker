import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Container,
  Form,
  DescriptionLabel,
  DescriptionTextarea,
  AssignToLabel,
  AssignToSelect,
  AssignToOption,
  PriorityLabel,
  PrioritySelect,
  PriorityOption,
  AddButton,
} from "./AddIssue.style";

export const AddIssue = () => {
  const [description, setDescription] = useState("");
  const [assignedTo, setAssigned] = useState(null);
  const [priority, setPriority] = useState("low");
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios(
          // 'https://my-issue-tracker-v1.herokuapp.com/api/users'
          "http://localhost:8080/api/users"
        );
        console.log("response", response.data);
        const uniqueDevs = [
          ...new Set(response.data.map((item) => item.username)),
        ];
        setDevs(uniqueDevs);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const body = {
        description,
        assignedTo,
        priority,
      };
      const response = await axios.post(
        // "https://my-issue-tracker-v1.herokuapp.com/api/issues/add",
        "http://localhost:8080/api/issues/add",

        body
      );
      alert(`Issue assigned to ${assignedTo}`);
      console.log(response.status);
    } catch (error) {
      console.error(error);
    }
  };

  // console.log('devs: ', devs);
  // console.log(description);
  // console.log(assignedTo);
  // console.log(priority);
  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <AssignToLabel>Assign to</AssignToLabel>
        <AssignToSelect
          required
          name="dev"
          id="dev"
          onChange={(e) => setAssigned(e.target.value)}
          defaultValue=""
        >
          <AssignToOption value="" disabled></AssignToOption>
          {devs.map((dev) => (
            <AssignToOption value={dev}>{dev}</AssignToOption>
          ))}
          {/* fetch users from another endpoint */}
          {/*
            <option value='person 1'>Person 1</option>
            <option value='person 2'>Person 2</option>
          <option value='person 3'>Person 3</option> */}
        </AssignToSelect>
        <PriorityLabel>Priority</PriorityLabel>
        <AssignToSelect
          name="priority"
          id="priority"
          onChange={(e) => setPriority(e.target.value)}
        >
          <PriorityOption value="low">Low</PriorityOption>
          <PriorityOption value="medium">Medium</PriorityOption>
          <PriorityOption value="high">High</PriorityOption>
        </AssignToSelect>
        <DescriptionLabel>Description</DescriptionLabel>
        <DescriptionTextarea
          name="description"
          id="description"
          placeholder="Description of issue..."
          required
          autoFocus
          wrap
          onChange={(e) => setDescription(e.target.value)}
          textarea
        />
        <AddButton type="submit">Add</AddButton>
      </Form>
    </Container>
  );
};
