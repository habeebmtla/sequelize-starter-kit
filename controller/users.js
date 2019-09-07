var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();
var jwt = require('jsonwebtoken')
var checkToken = require('../middleware/checkToken')
//Routes will go here
var {User, secret} = require('../config');
router.get('/',checkToken, function (req, res) {
    User.findAll().then(function (users) {
        res.send({error: false, message: 'users list', data: users});
    }).catch(function (err) {
        console.log('Oops! something went wrong, : ', err);
    });
});


module.exports = router;