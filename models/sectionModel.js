
module.exports = (sequelize, DataTypes) => {
    const Section = sequelize.define('section', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        sectionName: DataTypes.STRING,
        gradeLevel: DataTypes.STRING,
        studentCount: DataTypes.STRING,
        status: DataTypes.STRING

    })
    return Section
}