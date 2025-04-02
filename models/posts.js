module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('post', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        desctiption: {
            type: DataTypes.TEXT
        },
        content: {
            type: DataTypes.TEXT
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Post
}