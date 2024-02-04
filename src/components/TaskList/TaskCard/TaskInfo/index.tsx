// external imports
import React, { Dispatch, FC, SetStateAction, useContext } from "react";

// internal imports
// types
import { BUTTON_TYPES, ITask } from "types";
// providers
import { TaskListContext } from "providers/TaskListContextProvider";
// components
import Button from "components/Button";
// styles
import {
  InputCheckbox,
  TitleWrapper,
  EditButtonsWrapper,
  InputLabel,
} from "./styles";

interface Props {
  setIsShowEditInput: Dispatch<SetStateAction<boolean>>,
  task: ITask,
}

const TaskInfo: FC<Props> = ({ setIsShowEditInput, task }) => {
  const taskListState = useContext(TaskListContext);

  const handleClickCheckbox = () => {
    taskListState?.updateTaskList({ ...task, completed: !task.completed });
  };

  const handleClickEdit = () => setIsShowEditInput(true);

  const handleClickDelete = () => {
    taskListState?.removeTask(task);
  };

  return (
    <div>
      <TitleWrapper>
        <InputCheckbox type="checkbox" checked={task.completed} onChange={handleClickCheckbox} />
        <InputLabel>
          {task.title}
        </InputLabel>
      </TitleWrapper>
      <EditButtonsWrapper>
        <Button type={BUTTON_TYPES.BUTTON} onClick={handleClickEdit}>
          Edit
        </Button>
        <Button type={BUTTON_TYPES.BUTTON} onClick={handleClickDelete}>
          Delete
        </Button>
      </EditButtonsWrapper>
    </div>
  );
};

export default TaskInfo;
