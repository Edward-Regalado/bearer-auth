const { User, Users } = require('../../models/index.js');
const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

async function signupUser(req, res) {
    try {
        let obj = req.body;
        let newUser = await Users.create(obj);
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).send(`Cannot create user ${req.body.username}`)
    }
}

async function signinUser(req, res) {
    try {
        const user = await User.model.findOne({
            where: { username: req.body.username},
    });
    const isValid = await bcrypt.compare(req.body.password, user.password);
    if(isValid) {
        res.send(200).send(user);
        return;
      }
    } catch (error) {
        console.log(error);
    }
    res.status(403).send("Invalid username or password.");
}

router.post('/signup, signupUser');
router.post('/signin', signinUser);

module.exports = router;
