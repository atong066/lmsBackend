
module.exports = (sequelize, DataTypes) => {
    const PostTopics = sequelize.define('topics', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
        },
        description: DataTypes.STRING,
        content: DataTypes.STRING,
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: DataTypes.STRING
    })
    return PostTopics
}