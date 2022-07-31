'use strict';

const fs = require('fs');
const express = require('express');
const Collection = require('../models/data-collection.js');

const router = express.Router();

// STRETCH GOAL ...
// In express.Router(), this .param() is special middleware that runs
// when a param is found (by name) in a route. We can use this to
// figure out what model the user requested

router.param('model', (req, res, next) => {
    const fileName = `${__dirname}/../models/${req.params.model}/model.js`;

    // this should be async
    if(fs.existsSync(fileName)) {
        const model = require(fileName);
        req.model = new Collection(model);
        next();
    } else {
        next('invalid model!');
    }
});

// RESTful route declarations
// handler names are generic and we use /:model now instead of the actual model names
router.get('/:model', handleGetAll);
router.get('/:model/:id', handleGetOne);
router.post('/:model', handlerCreate);
router.put('/:model/:id', handleUpdate);
router.delete('/:model/:id', handleDelete);

// RESTful router handlers
async function handleGetAll(req, res) {
    let items = await req.model.get();
    res.status(200).json(items);
}

async function handleGetOne(req, res) {
    let obj = req.params.id;
    let item = await req.model.get(id);
    res.status(200).json(item);
}

async function handleCreate(req, res) {
    let obj = req.body;
    let item = await req.model.create(obj);
    res.status(200).json(item);
}

async function handleUpdate(req, res) {
    const id = req.params.id;
    const obj = req.body;
    let item = await req.model.update(id, obj);
    res.status(200).json(item);
}

async function handleDelete(req, res) {
    let id = req.params.id;
    let item = await req.model.delete(id);
    res.status(200).json(item);
}

module.exports = router;
