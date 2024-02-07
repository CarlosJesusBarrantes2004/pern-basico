import { useContext } from "react";
import TaskContext from "../context/TaskContext";

const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context)
    throw new Error("useTasks mut be used within a TaskContextProvider.");
  return context;
};

export default useTasks;
