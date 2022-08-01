'use strict';

const express = require('express');

const FoodCollection = require('../models/index.js').Food;

const router = express.Router();

// RESTful Route Declarations
router.get('/food', getFood);
router.get('/food/:id', getOneFood);
router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

// RESTful Route Handlers
async function getFood(req, res) {
  let allItems = await FoodCollection.read();
  res.status(200).json(allItems);
}

async function getOneFood(req, res) {
  const id = req.params.id;
  let item = await FoodCollection.read(id);
  res.status(200).json(item);
}

async function createFood(req, res) {
  let obj = req.body;
  let item = await FoodCollection.create(obj);
  res.status(200).json(item);
}

async function updateFood(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let item = await FoodCollection.update(id, obj);
  res.status(200).json(item);
}

async function deleteFood(req, res) {

    // if(req.user && req.user.role != 'admin') // This does not work
    if(req.user?.role != 'admin'){
       res.status(403).send('unauthorized for this action');
    } else {
        let id = req.params.id;
        let item = await FoodCollection.delete(id);
        res.status(200).json(item);
      }
    }


module.exports = router;
