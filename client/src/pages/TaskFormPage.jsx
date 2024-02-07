import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import useTasks from "../hooks/useTasks";
import { useEffect } from "react";

const TaskFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();
  const { getTask, createTask, updateTask } = useTasks();

  const onSubmit = async (data) => {
    params.id ? await updateTask(params.id, data) : await createTask(data);
    navigate("/");
  };

  useEffect(() => {
    const laodTask = async () => {
      if (params.id) {
        const res = await getTask(params.id);
        setValue("title", res.title);
        setValue("content", res.content);
      }
    };
    laodTask();
  }, []);

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Write a title..."
          {...register("title", { required: true })}
        />
        {errors.title?.type === "required" && <p>Field required.</p>}
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          rows="3"
          placeholder="Write something..."
          {...register("content", { required: true })}
        ></textarea>
        {errors.content?.type === "required" && <p>Field required.</p>}
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default TaskFormPage;
