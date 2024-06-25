// app.js
import express from "express";
import bodyParser from "body-parser";
import eventRoutes from "./routes/eventRoutes";
import { createDB } from "./config/database";
import Event from "./models/eventModel";

const init = async () => {
  await createDB();
  await Event.createTable();
};

const app = express();
app.use(bodyParser.json());
app.use("/api", eventRoutes);

app.get("/", function (req, res) {
  return res.status(200).json({ message: "Bienvenido a la API REST de Event Master" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  init();
  console.log(`Server running on port ${PORT}`);
});
