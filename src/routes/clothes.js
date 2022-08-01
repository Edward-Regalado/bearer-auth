'use strict';

const { request } = require('express');
const express = require('express');

const clothesCollection = require('../models/index.js').Clothes;

const router = express.Router();

// RESTfull Route declarations
router.get('/clothes', getClothes);
router.get('./clothes/:id', getOneClothes);
router.post('./clothes', createClothes);
router.put('./clothes/:id', updateClothes);
router.delete('./clothes/:id', deleteClothes);

// RESTfull Route handlers

async function getClothes(req, res) {
    let allItems = await clothesCollection.read();
    res.status(200).json(allItems);
}

async function getOneClothes(req, res) {
    let id = req.params.id;
    let item = await clothesCollection.read(id);
    res.status(200).json(item);
}

async function createClothes(req, res) {
    let obj = req.body;
    let item = await clothesCollection.create(obj);
    res.status(200).json(item);
}

async function updateClothes(req, res) {
    let id = req.params.id;
    let item = await clothesCollection.delete(id);
    res.status(200).json(item);
}

async function deleteClothes(req, res) {
    let id = req.params.id;
    let item = await clothesCollection.delete(id);
    res.status(200).json(item);
}

module.exports = router;

