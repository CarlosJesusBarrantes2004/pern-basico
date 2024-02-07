import pool from "../db.js";

export const getTasks = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM tasks;");
    res.json(
      result.rows.map((task) => ({
        id: task.task_id,
        title: task.task_title,
        content: task.task_content,
      }))
    );
  } catch (error) {
    next(error);
  }
};

export const getTask = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM tasks WHERE task_id = $1;", [
      req.params.id,
    ]);

    if (!result.rows.length)
      return res.status(404).json({ message: "Task not found." });

    res.json({
      id: result.rows[0].task_id,
      title: result.rows[0].task_title,
      content: result.rows[0].task_content,
    });
  } catch (error) {
    next(error);
  }
};

export const createTask = async (req, res, next) => {
  const { title, content } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO tasks (task_title, task_content) VALUES ($1,$2) RETURNING *;",
      [title, content]
    );
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  const { title, content } = req.body;

  try {
    const result = await pool.query(
      "UPDATE tasks SET task_title = $1, task_content = $2 WHERE task_id = $3 RETURNING *;",
      [title, content, req.params.id]
    );

    if (!result.rowCount)
      return res.status(404).json({ message: "Task not found." });

    res.json({ message: "Task updated successfully." });
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const result = await pool.query("DELETE FROM tasks WHERE task_id = $1;", [
      req.params.id,
    ]);

    if (!result.rowCount)
      return res.status(404).json({ message: "Task not found." });

    res.json({ message: "Task deleted successfully." });
  } catch (error) {
    next(error);
  }
};
