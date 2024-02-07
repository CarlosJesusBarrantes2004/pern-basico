import useTasks from "../hooks/useTasks";
import Task from "../components/Task";
import { useEffect } from "react";

const TasksPage = () => {
  const { tasks, getTasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task}></Task>
      ))}
    </div>
  );
};

export default TasksPage;
