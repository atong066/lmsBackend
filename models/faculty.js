module.exports = (sequelize, DataTypes) => {
    const Faculty = sequelize.define('faculty', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        lastName: DataTypes.STRING,
        firstName: DataTypes.STRING,
        middleName: DataTypes.STRING,
        gender: DataTypes.STRING,
        dateOfBirth: DataTypes.STRING,
        status: {
            type: DataTypes.STRING,
            defaultValue: "1"
        },
        empStatus: {
            type: DataTypes.STRING,
            defaultValue: "1"
        },
        email: DataTypes.STRING,
        department: DataTypes.STRING,
        address: DataTypes.STRING,
        designation: DataTypes.STRING,
        contactNumber: DataTypes.STRING,
        credentials: DataTypes.TEXT('long'),
        achievements: DataTypes.TEXT('long'),
    })
    return Faculty
}