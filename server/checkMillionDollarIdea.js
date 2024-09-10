const checkMillionDollarIdea = (req, res, next) => {
    if(req.model !=="ideas"){
        next()
    } else {
        const {numWeeks, weeklyRevenue} = req.body;
        const minimumValue = 1000000
        const total = Number(numWeeks) * Number(weeklyRevenue) 
        if (total> minimumValue) {
            next()
        } else {
            res.status(401).send(`Idea worth only ${total}, needs to be worth at least ${minimumValue}`)
        }
    };
}

// Leave this exports assignment so that the function can be used elsewhere

module.exports = checkMillionDollarIdea;
