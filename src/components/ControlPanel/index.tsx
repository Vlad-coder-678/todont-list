// external imports
import React, { FC, useContext } from "react";

// internal imports
// providers
import { TaskListContext } from "providers/TaskListContextProvider";
// types
import { BUTTON_TYPES, Filter } from "types";
// components
import Button from "components/Button";
// styles
import Wrapper from "./styles";

const ControlPanel: FC = () => {
  const taskListState = useContext(TaskListContext);

  return (
    <Wrapper>
      <Button type={BUTTON_TYPES.BUTTON} onClick={() => taskListState?.setTaskFilter(Filter.all)}>
        Show All tasks
      </Button>
      <Button type={BUTTON_TYPES.BUTTON} onClick={() => taskListState?.setTaskFilter(Filter.active)}>
        Show Active tasks
      </Button>
      <Button type={BUTTON_TYPES.BUTTON} onClick={() => taskListState?.setTaskFilter(Filter.completed)}>
        Show Completed tasks
      </Button>
    </Wrapper>
  );
};

export default ControlPanel;
