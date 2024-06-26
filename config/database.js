// config/database.js
import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Elimina la función createDB si no se necesita crear la base de datos
// export const createDB = async () => {
//   const connection = await db.getConnection();
//   await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);
//   await connection.release();
// };

export default db;
