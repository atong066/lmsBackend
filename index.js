const express = require('express')
const app = express()
const port = 3000
const db = require('./models')
const user = require('./routes/user')
const login = require('./routes/login')
const topic = require('./routes/postTopicRoute')
const faculty = require('./routes/facultyRoute')
const postsRoute = require('./routes/posts')
const sectionRouter = require('./routes/sectionRoute')
const cookieParser = require("cookie-parser");
app.use(express.json())
app.use(cookieParser());
app.use('/users', user);
app.use('/', login);
app.use('/post', postsRoute);
app.use('/topics', topic);
app.use('/', faculty)
app.use('/', sectionRouter)
db.sequelize.sync({ force: true }).then((req) => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
})
