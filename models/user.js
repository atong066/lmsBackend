module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        userType: DataTypes.STRING,
        isLogedin: DataTypes.BOOLEAN,
        password: DataTypes.STRING
    }, {
        freezeTableName: true
    },
    )
    return User;
}