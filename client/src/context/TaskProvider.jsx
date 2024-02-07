import { useState } from "react";
import TaskContext from "./TaskContext";
import {
  getTasksRequest,
  getTaskRequest,
  createTaskRequest,
  updateTaskRequest,
  deleteTaskRequest,
} from "../api/tasks.api";

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
      return res.data;
    } catch (err) {
      console.log(err.message);
    }
  };

  const createTask = async (task) => {
    try {
      const res = await createTaskRequest(task);
      console.log(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const updateTask = async (id, task) => {
    try {
      const res = await updateTaskRequest(id, task);
      console.log(res.data.message);
    } catch (err) {
      console.log(err.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await deleteTaskRequest(id);
      console.log(res.data.message);
      setTasks((tasks) => tasks.filter((task) => task.id !== id));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, getTasks, getTask, createTask, updateTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
