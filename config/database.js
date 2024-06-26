// config/database.js
import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "event_master",
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
