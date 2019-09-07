module.exports = function(sequelize,DataTypes){
    const Movie = sequelize.define('movie',{
        title: {
            type: DataTypes.STRING(32),
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING(50),
            allowNull: false,
        }
    },{
        createdAt:'created_at',
        updatedAt:'updated_at'
    });

    return Movie;
};