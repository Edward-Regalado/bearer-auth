'use strict';

const express = require('express');

const usersCollection = require('../models/index.js').User;

const router = express.Router();

// RESTful route declarations
router.get('./user/:id', getOneUser);
router.post('./user', createUser);

// RESTful route handlers
async function getOneUser(req, res) {
    let id = req.params.id;
    let item = await usersCollection.read();
    res.status(200).json(item);
}

async function createUser(req, res) {
    let obj = req.body;
    let item = await usersCollection.create(obj);
    res.status(200).json(item);
}

module.exports = router;

