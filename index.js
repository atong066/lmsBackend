const express = require('express')
var cors = require('cors')
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
app.use(cors({
    origin: ['http://localhost:3000', 'http://emarkit.rf.gd'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
    credentials: true // Allow cookies and credentials
}));
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
