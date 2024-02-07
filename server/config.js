import { config } from "dotenv";

config();

export const port = process.env.PORT || 3000;
export const user = process.env.DB_USER || "postgres";
export const password = process.env.DB_PASSWORD || "Barrantes2004";
export const host = process.env.DB_HOST || "localhost";
export const db_port = process.env.DB_PORT || 5432;
export const database = process.env.DB_DATABASE || "tasksdb;";
