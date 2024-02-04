export enum BUTTON_TYPES {
  BUTTON = "button",
  SUBMIT = "submit",
  RESET = "reset",
};

export interface ITask {
  id: string,
  title: string,
  completed: boolean
}

export type TaskListType = ITask[];

export enum Filter {
  all = "all",
  active = "active",
  completed = "completed",
};
