let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Meal = require('../models/meal');
let mealController = require('../controller/meal');

function requireAuth(req,res,next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}


/*routes for different views and operations*/
router.get('/',mealController.displayMealList);

router.get('/add',requireAuth,mealController.displayAddPage);

router.post('/add',requireAuth,mealController.processAddPage);

router.get('/edit/:id',requireAuth,mealController.displayEditPage);

router.post('/edit/:id',requireAuth,mealController.processsEditPage);

router.get('/delete/:id',requireAuth,mealController.performDeleteOperation);

module.exports = router;
