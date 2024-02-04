// external imports
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// internal imports
// providers
import TaskListContextProvider from "providers/TaskListContextProvider";
// componets
import App from "./App";
// styles
import GlobalStyles from "./assets/styles/global.styles";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <TaskListContextProvider>
      <App />
    </TaskListContextProvider>
    <GlobalStyles />
  </StrictMode>,
);
