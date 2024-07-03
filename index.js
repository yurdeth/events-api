// index.js
import express from "express";
import bodyParser from "body-parser";
import cors from "cors"; // Añade esta línea
import eventRoutes from "./routes/eventRoutes";
import { createDB } from "./config/database";
import Event from "./models/eventModel";
import dotenv from "dotenv";

dotenv.config();

// Elimina la llamada a createDB si no se necesita crear la base de datos
const init = async () => {
  /*await createDB();*/
  await Event.createTable();
};

const app = express();

// Usa CORS sin opciones específicas (permite todas las solicitudes)
app.use(cors());

// Configura CORS
// const corsOptions = {
//   origin: ['http://127.0.0.1:5500', 'http://localhost:5500'], // Añade aquí los orígenes permitidos
//   optionsSuccessStatus: 200
// };
// app.use(cors(corsOptions)); // Usa CORS con las opciones configuradas

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