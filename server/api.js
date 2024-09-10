const express = require("express");
const apiRouter = express.Router();
const db = require('./db')

// /api/minions

// GET /api/minions to get an array of all minions.
apiRouter.get('/minions',(req, res) => {
    res.status(200).send(db.getAllFromDatabase("minions"))
})
// POST /api/minions to create a new minion and save it to the database.
// GET /api/minions/:minionId to get a single minion by id.
// PUT /api/minions/:minionId to update a single minion by id.
// DELETE /api/minions/:minionId to delete a single minion by id.


// /api/ideas

// GET /api/ideas to get an array of all ideas.
apiRouter.get('/ideas', (req, res) => {
    res.status(200).send(db.getAllFromDatabase("ideas"))
})
// POST /api/ideas to create a new idea and save it to the database.
// GET /api/ideas/:ideaId to get a single idea by id.
// PUT /api/ideas/:ideaId to update a single idea by id.
// DELETE /api/ideas/:ideaId to delete a single idea by id.


// /api/meetings

// GET /api/meetings to get an array of all meetings.
apiRouter.get('/meetings', (req, res) => {
    res.status(200).send(db.getAllFromDatabase("meetings"))
})
// POST /api/meetings to create a new meeting and save it to the database.
// DELETE /api/meetings to delete all meetings from the database.


module.exports = apiRouter
