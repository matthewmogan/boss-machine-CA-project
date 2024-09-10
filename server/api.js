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
// Parameter to pull the ID name name
apiRouter.param("id",(req,res,next,id) => {
    if (!db.getFromDatabaseById(req.model,id)){
        res.status(404).send(`${id} is not a valid id in the ${req.model} database`)
    } else {
        req.id = id;
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
        res.status(404).send(`Invalid body - please check ${req.model} object's schema, and resend object`)
    }
})
// Get - get a minion, idea, or meeting by ID
apiRouter.get("/:model/:id",(req, res) => {
    try {
        const result = db.getFromDatabaseById(req.model, req.id)
        res.status(200).send(result)
    } catch {
        res.status(404).send(`Could not find ${req.id} in the ${req.model} database`)
    }
})
// Put - update a minion, meeting, or ID by ID
apiRouter.put("/:model/:id",(req, res) => {
    try {
        const updatedInstance = db.updateInstanceInDatabase(req.model, req.body)
        res.status(200).send(updatedInstance)
    } catch {
        res.status(404).send(`Could not update instance ${req.id} in ${req.model}`)
    }
})
// Delete - delete a minion, meeting, or ID by ID
apiRouter.delete("/:model/:id",(req, res) => {
    const deleted = db.deleteFromDatabasebyId(req.model,req.id)
    if (!deleted) {
        res.status(400).send(`Could not delete instance ${req.id} in ${req.model}`)
    } else {
        res.status(200).send(`Deleted instance ${req.id} in ${req.model}`)
    }
}

)

module.exports = apiRouter