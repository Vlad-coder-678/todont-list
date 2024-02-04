// external imports
import React, { ChangeEvent, Dispatch, FC, SetStateAction, useContext, useState } from "react";

// internal imports
// types
import { BUTTON_TYPES, ITask } from "types";
// providers
import { TaskListContext } from "providers/TaskListContextProvider";
// components
import Button from "components/Button";
// styles
import InputText from "./styles";

interface Props {
  setIsShowEditInput: Dispatch<SetStateAction<boolean>>,
  task: ITask,
}

const EditTask: FC<Props> = ({
  setIsShowEditInput,
  task,
}) => {
  const taskListState = useContext(TaskListContext);
  const [editInputValue, setEditinputValue] = useState(task.title);

  const handleEditInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditinputValue(event.target.value);
  };

  const handleCancelButtonClick = () => {
    setEditinputValue(task.title);
    setIsShowEditInput(false);
  };

  const handleSaveButtonClick = () => {
    if (editInputValue) {
      taskListState?.updateTaskList({ ...task, title: editInputValue });
      setIsShowEditInput(false);
    };
  };

  return (
    <div>
      <div>
        <InputText value={editInputValue} onChange={handleEditInputChange} />
      </div>
      <div>
        <Button type={BUTTON_TYPES.BUTTON} onClick={handleCancelButtonClick}>
          Cancel
        </Button>
        <Button type={BUTTON_TYPES.BUTTON} onClick={handleSaveButtonClick}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditTask;
