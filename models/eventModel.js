// models/eventModel.js
import db from "../config/database";

const Event = {
  getAll: async (query = "") => {
    if (query) {
      const [rows] = await db.query(
        "SELECT * FROM events WHERE CONCAT(name, location, category, date, details) LIKE ?",
        [`%${query}%`]
      );
      return rows;
    }
    const [rows] = await db.query("SELECT * FROM events");
    return rows;
  },
  getById: async (id) => {
    const [rows] = await db.query("SELECT * FROM events WHERE id = ?", [id]);
    return rows[0];
  },
  create: async (event) => {
    const [result] = await db.query(
      "INSERT INTO events (name, location, category, date, details, capacity, userid) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [event.name, event.location, event.category, event.date, event.details, event.capacity, event.userid]
    );
    return result.insertId;
  },
  update: async (id, event) => {
    const [result] = await db.query(
      "UPDATE events SET name = ?, location = ?, category = ?, date = ?, details = ?, capacity = ? , userid = ? WHERE id = ?",
      [event.name, event.location, event.category, event.date, event.details, event.capacity, event.userid, id]
    );
    return result.affectedRows;
  },
  delete: async (id) => {
    const [result] = await db.query("DELETE FROM events WHERE id = ?", [id]);
    return result.affectedRows;
  },
  createTable: async () => {
    const [result] = await db.query(
      `CREATE TABLE IF NOT EXISTS events (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        location VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL,
        date DATE NOT NULL,
        details TEXT NOT NULL,
        capacity INT NOT NULL,
        userid string NOT NULL
      )`
    );
    return result;
  },
};

export default Event;
