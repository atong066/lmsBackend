module.exports = (sequelize, DataTypes) => {
    const StudentInfo = sequelize.define('userinfo', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        birthDate: DataTypes.STRING,
        brgy: DataTypes.STRING,
        firstName: DataTypes.STRING,
        housenumber: DataTypes.STRING,
        lastName: DataTypes.STRING,
        middelName: DataTypes.STRING,
        municipality: DataTypes.STRING,
        nationality: DataTypes.STRING,
        province: DataTypes.STRING,
        street: DataTypes.STRING,
        email: DataTypes.STRING,
        contactNumber: DataTypes.STRING,
        parentsInfo: DataTypes.TEXT('long')

    })
    return StudentInfo
}