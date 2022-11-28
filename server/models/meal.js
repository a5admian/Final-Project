/*database schema*/
let mongoose = require('mongoose');
let mealModel = mongoose.Schema(
    {
        breakf: String,
        lunch: String,
        dinner: String,
    },
    {
        collection: "meal"
    }
);
module.exports = mongoose.model('Meal', mealModel);