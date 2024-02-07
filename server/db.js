import pkg from "pg";
const { Pool } = pkg;
import { user, password, host, db_port, database } from "./config.js";

const pool = new Pool({
  user,
  password,
  host,
  port: db_port,
  database,
});

export default pool;
