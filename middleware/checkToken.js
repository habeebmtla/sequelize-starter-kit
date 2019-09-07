var  jwt = require('jsonwebtoken');
var {secret,User} = require('../config')
module.exports = function (req, res, next) {
    let token = req.headers['authorization']; // Express headers are auto converted to lowercase

    if (token) {
        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            token = token.slice(7, token.length);
        }
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Token is not valid'
                });
            } else {
                User.findByPk(decoded.id).then(user => {
                    if(user && user.status)
                        next();
                    else
                        return res.json({
                            success: false,
                            message: 'Token is not valid'
                        });
                })
            }
        });
    } else {
        return res.json({
            success: false,
            message: 'Auth token is not supplied'
        });
    }
};