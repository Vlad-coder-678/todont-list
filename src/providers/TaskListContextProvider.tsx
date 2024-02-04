// vendor imports
import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

// local imports
// mock
import TASK_LIST from "data/mock.json";
// types
import { Filter, ITask, TaskListType } from "types";

interface ITaskListContext {
  addNewTask: (props: Omit<ITask, "completed">) => void,
  allTaskListLength: number,
  filteredTaskList: TaskListType,
  removeTask: (props: Pick<ITask, "id">) => void,
  setTaskFilter: Dispatch<SetStateAction<Filter>>,
  updateTaskList: (props: ITask) => void,
}

export const TaskListContext = createContext<ITaskListContext | null>(null);

interface IProps {
  children: ReactNode,
}

const TaskListContextProvider: FC<IProps> = ({ children }) => {
  const [allTaskList, setAllTaskList] = useState<TaskListType>(TASK_LIST);
  const [currentFilter, setCurrentFilter] = useState<Filter>(Filter.all);

  const addNewTask = ({ id, title }: Omit<ITask, "completed">) => {
    setAllTaskList(state => ([{ id, title, completed: false }, ...state]));
  };

  const updateTaskList = ({ id, title, completed }: ITask) => {
    setAllTaskList(state => state.map(task => (task.id === id ? { ...task, title, completed } : task)));
  };

  const removeTask = ({ id }: Pick<ITask, "id">) => {
    setAllTaskList(state => state.filter(task => task.id !== id));
  };

  const _getFilteredTasks = (filter: Filter) => {
    if (filter === Filter.all) {
      return allTaskList;
    } else if (filter === Filter.active) {
      return allTaskList.filter(({ completed }) => !completed);
    } else {
      return allTaskList.filter(({ completed }) => completed);
    }
  };

  const value = {
    addNewTask,
    allTaskListLength: allTaskList.length,
    filteredTaskList: _getFilteredTasks(currentFilter),
    removeTask,
    setTaskFilter: setCurrentFilter,
    updateTaskList,
  };

  return (
    <TaskListContext.Provider value={value}>
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
