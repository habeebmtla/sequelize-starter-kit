const express = require('express');
const bodyParser = require('body-parser');
var users = require('./controller/users.js');
var auth = require('./controller/auth.js');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
//Use the Router on the sub route /movies
var router = express.Router();
app.use('/api',router)
//
router.use('/users', users);

router.use('/auth',auth);



app.listen(8080, () =>
    console.log('Express server is running on localhost:8080')
);

