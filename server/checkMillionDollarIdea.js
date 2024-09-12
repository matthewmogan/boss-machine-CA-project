const checkMillionDollarIdea = (req, res, next) => {
    const {numWeeks, weeklyRevenue} = req.body;
    const minimumValue = 1000000
    const total = Number(numWeeks) * Number(weeklyRevenue) 
    if (total >= minimumValue) {
        next()
    } else {
        res.status(400).send(`Idea worth only ${total}, needs to be worth at least ${minimumValue}`)
    }
};

// const checkMillionDollarIdea = (req, res, next) => {          
//     const {numWeeks, weeklyRevenue} = req.body;
//     const total = Number(numWeeks) * Number(weeklyRevenue)
//     const minimumValue = 1000000
//     if (total > minimumValue) {
//         next()
//     } else {
//         res.status(400).send(`Idea worth only ${total}, needs to be worth at least ${minimumValue}`)
//     }
// }
        
// Leave this exports assignment so that the function can be used elsewhere

module.exports = checkMillionDollarIdea;
