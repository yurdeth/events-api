// routes/eventRoutes.js
import {Router} from "express";
import {createEvent, deleteEvent, getAllEvents, getEventById, updateEvent} from "../controllers/eventController";

const router = Router();

router.get("/events", getAllEvents);
router.get("/events/:id", getEventById);
router.post("/events", createEvent);
router.put("/events/:id", updateEvent);
router.delete("/events/:id", deleteEvent);

export default router;
