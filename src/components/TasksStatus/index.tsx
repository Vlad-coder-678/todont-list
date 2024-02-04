// external imports
import React, { FC, useContext } from "react";

// internal imports
// providers
import { TaskListContext } from "providers/TaskListContextProvider";

const TasksStatus: FC = () => {
  const taskListState = useContext(TaskListContext);
  const taskListLength = taskListState?.allTaskListLength;

  return (
    <h2>
      {`${taskListLength} ${taskListLength === 1 ? "task" : "tasks"} remaining`}
    </h2>
  );
};

export default TasksStatus;
