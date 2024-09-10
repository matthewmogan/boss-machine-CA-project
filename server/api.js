const express = require("express");
const apiRouter = express.Router();
const db = require('./db')

// Parameter to pull the model name

apiRouter.param("model",(req, res, next, model) =>{
    if (!db.validateName(model)) {
        res.status(404).send(`${model} is not a valid model`);
    } else {
    req.model = model;
    next()
    }
})

apiRouter.get("/:model",(req, res) => {
    res.status(200).send(db.getAllFromDatabase(req.model))
    console.log("hello")
})



module.exports = apiRouter
