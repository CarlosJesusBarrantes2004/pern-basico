import express, { json } from "express";
import morgan from "morgan";
import taskRouter from "./routes/tasks.routes.js";
import cors from "cors";

const app = express();

//middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(morgan("dev"));
app.use(json());
app.use("/api", taskRouter);

app.use((err, req, res, next) => {
  return res.json({ message: err.message });
});

app.use((req, res, next) => {
  res.status(404).json({ message: "endpoint not found." });
});

export default app;
