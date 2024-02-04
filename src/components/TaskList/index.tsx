// external imports
import React, { FC, useContext } from "react";

// internal imports
// providers
import { TaskListContext } from "providers/TaskListContextProvider";
// components
import TaskCard from "components/TaskList/TaskCard";

const TaskList: FC = () => {
  const taskListState = useContext(TaskListContext);
  const taskList = taskListState?.filteredTaskList;

  return (
    <div>
      {taskList?.map(task => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
};

export default TaskList;
