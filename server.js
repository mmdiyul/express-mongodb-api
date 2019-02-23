const express = require('express')
const db = require('./config/db')
let User = require('./models/user.model')
let UserRoute = require('./routes/user.route')
let port = process.env.PORT || 3000
let app = express()

app.use('/user', UserRoute)

app.listen(port, () => {
    console.log(`Server started on ` + port);
});