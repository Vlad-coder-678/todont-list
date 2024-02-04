// external imports
import { FC, useState } from "react";

// internal imports
// types
import { ITask } from "types";
// components
import EditTask from "./EditTask";
import TaskInfo from "./TaskInfo";

interface Props {
  task: ITask,
}

const TaskCard: FC<Props> = ({ task }) => {
  const [isShowEditInput, setIsShowEditInput] = useState(false);

  return isShowEditInput ? (
    <EditTask
      setIsShowEditInput={setIsShowEditInput}
      task={task}
    />
  ) : (
    <TaskInfo
      setIsShowEditInput={setIsShowEditInput}
      task={task}
    />
  );
};

export default TaskCard;
