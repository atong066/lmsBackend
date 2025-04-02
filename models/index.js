const dbConfig = require('../db/db-config')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect
})

const db = {}
db.sequelize = sequelize;
db.models = {}
db.models.User = require('./user')(sequelize, Sequelize.DataTypes)
db.models.Post = require('./posts')(sequelize, Sequelize.DataTypes)
db.models.Replies = require('./postreplies')(sequelize, Sequelize.DataTypes)
db.models.PostTopics = require('./postTopics')(sequelize, Sequelize.DataTypes)
db.models.StudentInfo = require('./studentInfo')(sequelize, Sequelize.DataTypes)
db.models.Faculty = require('./faculty')(sequelize, Sequelize.DataTypes)
db.models.Section = require('./sectionModel')(sequelize, Sequelize.DataTypes)

db.models.User.hasMany(db.models.Faculty)
db.models.Faculty.belongsTo(db.models.User)

db.models.Faculty.hasOne(db.models.Section)
db.models.Section.belongsTo(db.models.Faculty)

db.models.User.hasMany(db.models.Post)
db.models.Post.belongsTo(db.models.User)



db.models.Post.hasMany(db.models.Replies)
db.models.Replies.belongsTo(db.models.Post)

db.models.User.hasMany(db.models.Replies)
db.models.Replies.belongsTo(db.models.User)

db.models.PostTopics.hasMany(db.models.Post)
db.models.Post.belongsTo(db.models.PostTopics)

module.exports = db