let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Meal = require('../models/meal');

/* displaying the meal list*/
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
            Meallist: meallist,
            displayName: req.user ? req.user.displayName:''
           })
        }
    });
}

/* displaying the 'add' page*/
module.exports.displayAddPage = (req,res,next)=>{
    res.render('meal/add',{title: 'Add your Meals!'})
}

/* process for adding new info into the meal list*/
module.exports.processAddPage = (req,res,next)=>{
    let newInfo = Meal ({
        "breakf":req.body.breakf,
        "c1":req.body.c1,
        "lunch":req.body.lunch,
        "c2":req.body.c2,
        "dinner":req.body.dinner,
        "c3":req.body.c3,
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
            res.render('meal/edit',{title: 'Edit your Meals!', 
            meal:mealToEdit,
            displayName: req.user ? req.user.displayName:'' })
        }
    });
}

/* process for editing info from the meal list*/
module.exports.processsEditPage = (req,res,next) => {
    let id = req.params.id;
    let updateMeal = Meal({
        "_id":id,
        "breakf":req.body.breakf,
        "c1":req.body.c1,
        "lunch":req.body.lunch,
        "c2":req.body.c2,
        "dinner":req.body.dinner,
        "c3":req.body.c3
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


