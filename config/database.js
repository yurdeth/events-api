// config/database.js
import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "event_master",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export const createDB = async () => {
  const connection = await db.getConnection();
  await connection.query("CREATE DATABASE IF NOT EXISTS event_master");
  await connection.release();
};

export default db;
