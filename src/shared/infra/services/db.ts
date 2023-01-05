import mysql from "mysql2";

import 'dotenv/config';

const port = process.env.DB_PORT as number | undefined;

export const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: port,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});
