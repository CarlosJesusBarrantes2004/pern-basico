import { useNavigate } from "react-router-dom";
import useTasks from "../hooks/useTasks";

const Task = ({ task }) => {
  const navigate = useNavigate();
  const { deleteTask } = useTasks();

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.content}</p>
      <div>
        <button
          onClick={() => {
            navigate("/edit/" + task.id);
          }}
        >
          Edit
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
