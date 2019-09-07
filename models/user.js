module.exports = function(sequelize,DataTypes){
    const User = sequelize.define('user',{
        username: {
            type: DataTypes.STRING(32),
            allowNull: false,
            unique: true
        },

        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: false
        },
        password: DataTypes.STRING,
        status: {
            defaultValue: 1,
            type: DataTypes.BOOLEAN
        }
    },{
        createdAt:'created_at',
        updatedAt:'updated_at'
    });

    return User;

};