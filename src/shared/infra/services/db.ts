import mysql from "mysql2/promise";

import 'dotenv/config';

const port = process.env.DB_PORT as number | undefined;

export async function connection () {
  let connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: port,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });
  return connection;
}
