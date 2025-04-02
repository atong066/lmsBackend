module.exports = (sequelize, DataTypes) => {
    const Replies = sequelize.define('postreplies', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        content: {
            type: DataTypes.TEXT,
        }
    })
    return Replies
}