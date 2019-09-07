var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();
var jwt = require('jsonwebtoken')
//Routes will go here
var {User, secret} = require('../config');

router.post('/login', function (req, res) {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (user) {
            check_passwd = bcrypt.compareSync(req.body.password, user.password)
            if (check_passwd) {
                let token = jwt.sign({
                    id: user.id
                }, secret);
                res.json({
                    message: "success",
                    token: token
                })
            } else {
                res.json({
                    message:"Password Incorrect"
                })
            }

        } else {
            res.json({
                "message": "user doesn't exist"
            }).status(422);
        }
    })
})

router.post('/register',function (req,res) {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    }).then(user => {
        var token = jwt.sign({
            id: user.dataValues.id
        }, secret);
        res.json({
            message: "success",
            token: token
        }).status(201);

    }).catch(err => {
        res.json(err.errors).status(422)
    })
})

module.exports = router;