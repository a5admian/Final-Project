let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Meal = require('../models/meal');
let mealController = require('../controller/meal');
const meal = require('../models/meal');


/*routes for different views and operations*/
router.get('/',mealController.displayMealList);

router.get('/add',mealController.displayAddPage);

router.post('/add',mealController.processAddPage);

router.get('/edit/:id',mealController.displayEditPage);

router.post('/edit/:id',mealController.processsEditPage);

router.get('/delete/:id',mealController.performDeleteOperation);

module.exports = router;