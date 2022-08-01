const { Users } = require('../../models/index.js');
const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

async function signUpUser(req, res) {
    try {
        let obj = req.body;
        let newUser = await Users.create(obj);
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).send(`Cannot create user ${req.body.username}`);
        console.log(error.message);
    }
}

async function signInUser(req, res) {
    try {
        const user = await Users.model.findOne({
            where: { username: req.body.username},
    });
    const isValid = await bcrypt.compare(req.body.password, user.password);
    if(isValid) {
        res.send(200).send({ user: user.username, token: user.token });
        return;
      }
    } catch (error) {
        console.log(error.message);
    }
    res.status(403).send("Invalid username or password.");
}

router.post('/signup', signUpUser);
router.post('/signin', signInUser);

module.exports = router;
