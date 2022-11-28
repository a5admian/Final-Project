let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Meal = require('../models/meal');

/* displaying the health list*/
module.exports.displayMealList = (req,res,next)=>{
    Meal.find((err, meallist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
           res.render('meal/list', {
            title:'Meal Tracker',
            Meallist: meallist
           })
        }
    });
}

/* displaying the 'add' page*/
module.exports.displayAddPage = (req,res,next)=>{
    res.render('meal/add',{title: 'Add your Meals!'})
}

/* process for adding new info into the health list*/
module.exports.processAddPage = (req,res,next)=>{
    let newInfo = Meal ({
        "breakf":req.body.breakf,
        "lunch":req.body.lunch,
        "dinner":req.body.dinner,
    });
    Meal.create(newInfo,(err,Meal) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/meal')
        }
    })
}

/* displaying the 'edit' page*/
module.exports.displayEditPage = (req,res,next) => {
    let id = req.params.id;
    Meal.findById(id,(err,mealToEdit) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('meal/edit',{title: 'Edit your Meals!', meal:mealToEdit})
        }
    });
}

/* process for editing info from the health list*/
module.exports.processsEditPage = (req,res,next) => {
    let id = req.params.id;
    let updateMeal = Meal({
        "_id":id,
        "breakf":req.body.breakf,
        "lunch":req.body.lunch,
        "dinner":req.body.dinner,
    });
    Meal.updateOne({_id:id},updateMeal,(err)=> {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/meal')
        }
    });
}

/* process for delete operation*/
module.exports.performDeleteOperation = (req,res,next) => {
    let id = req.params.id;
    Meal.remove({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/meal')
        }
    });
}