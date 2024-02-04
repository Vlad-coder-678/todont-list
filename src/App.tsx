// external imports
import React from "react";

// internal imports
// assets
import { Container, Title } from "assets/styles/app.styles";
// components
import TaskCreated from "components/TaskCreated";
import ControlPanel from "components/ControlPanel";
import TasksStatus from "components/TasksStatus";
import TaskList from "components/TaskList";

const App = () => (
  <Container>
    <Title>
      Todont
    </Title>
    <TaskCreated />
    <ControlPanel />
    <TasksStatus />
    <TaskList />
  </Container>
);

export default App;
