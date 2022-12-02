/*database schema*/
let mongoose = require('mongoose');
let mealModel = mongoose.Schema(
    {
        breakf: String,
        c1: String,
        lunch: String,
        c2: String,
        dinner: String,
        c3: String,
    },
    {
        collection: "meal"
    }
);
module.exports = mongoose.model('Meal', mealModel);
