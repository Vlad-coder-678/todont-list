// external imports
import React, { ChangeEvent, FC, useContext, useState } from "react";
// eslint-disable-next-line
import { v4 as uuidv4 } from "uuid";

// internal imports
// types
import { BUTTON_TYPES } from "types";
// providers
import { TaskListContext } from "providers/TaskListContextProvider";
// components
import Button from "components/Button";
// styles
import { Input, Wrapper } from "./styles";

const INPUT_DEFAULT_VALUE = "";

const TaskCreated: FC = () => {
  const taskListState = useContext(TaskListContext);
  const [newTaskTitle, setNewTaskTitle] = useState(INPUT_DEFAULT_VALUE);

  const handleNewTaskTitleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(event.target.value);
  };

  const handleCreateNewTaskButtonClick = () => {
    if (newTaskTitle) {
      taskListState?.addNewTask({ id: uuidv4(), title: newTaskTitle });
      setNewTaskTitle(INPUT_DEFAULT_VALUE);
    }
  };

  return (
    <Wrapper>
      <Input value={newTaskTitle} onChange={handleNewTaskTitleInputChange} />
      <Button type={BUTTON_TYPES.BUTTON} onClick={handleCreateNewTaskButtonClick}>
        Add
      </Button>
    </Wrapper>
  );
};

export default TaskCreated;
