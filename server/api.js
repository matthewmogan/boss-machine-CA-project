const express = require("express");
const apiRouter = express.Router();
const db = require('./db')

// Parameter to pull the model name

apiRouter.param("model",(req, res, next, model) =>{
    if (!db.validateName(model)) {
        res.status(404).send(`${model} is not a valid model - please check spelling of model`);
    } else {
    req.model = model;
    next()
    }
})

// Get - get array of all minions, ideas, or meetings:
apiRouter.get("/:model",(req, res) => {
    res.status(200).send(db.getAllFromDatabase(req.model))
})
// Post - create a mew minion, idea, or meeting and send to the database 
apiRouter.post("/:model",(req, res) => {
    try{
        const newEntry = db.addToDatabase(req.model,req.body)
        res.status(201).send(newEntry)
    }
    catch {
        res.status(404).send(`invalid body - please check ${req.model} object's schema, and resend object`)
    }
})

module.exports = apiRouter
