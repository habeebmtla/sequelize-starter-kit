const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://root:123456@localhost/laravel_test');

var User = require('./models/user');
var Movie = require('./models/movies');

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });





// sequelize.sync({
//     force: false,
//     alter:true
// })

module.exports = {
    User : User(sequelize,Sequelize),
    Movie : Movie(sequelize,Sequelize),
    secret:'secret_key'
};

