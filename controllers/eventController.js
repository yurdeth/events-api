// controllers/eventController.js
import Event from "../models/eventModel";

// Get all events
export const getAllEvents = async (req, res) => {
    try {
        const events = await Event.getAll(req.query.q);
        res.json(events);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Get event by ID
export const getEventById = async (req, res) => {
    try {
        const event = await Event.getById(req.params.id);
        res.json(event);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Create a new event
export const createEvent = async (req, res) => {
    try {
        const newEventId = await Event.create(req.body);
        res.status(201).json({id: newEventId});
    } catch (err) {
        res.status(500).send(err);
    }
};

export const updateEvent = async (req, res) => {
    try {
        const el = await Event.update(req.params.id, req.body);
        res.status(200).json({success: el == 1});
    } catch (err) {
        res.status(500).send(err);
    }
};

export const deleteEvent = async (req, res) => {
    try {
        const el = await Event.delete(req.params.id);
        res.status(200).json({success: el == 1});
    } catch (err) {
        res.status(500).send(err);
    }
};
