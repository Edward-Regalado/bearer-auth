'use strict';

const express = require('express');

const UsersCollection = require('../models/index.js').Users;

const router = express.Router();

// RESTful route declarations
router.get('/users/:id', getOneUser);
router.post('/users', createUser);

// RESTful route handlers
async function getOneUser(req, res) {
    let id = req.params.id;
    let item = await UsersCollection.read(id);
    res.status(200).json(item);
}

async function createUser(req, res) {
    let obj = req.body;
    let item = await UsersCollection.create(obj);
    res.status(200).json(item);
}

module.exports = router;
