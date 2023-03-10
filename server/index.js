const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const cors = require('cors')
dotenv.config();
const port = process.env.PORT
const app = express()
const user = require('./routes/user');
app.use(cors())
mongoose.set('strictQuery', true)
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    console.log("Connected to Mongodb")
    if (err) {
        console.log(err)
    } else {
        app.listen(process.env.PORT || port, () => { console.log(`server started on port : http://localhost:${port}/`) })
    }
})
app.use('/', user)

app.get('*', (req, res) => {
    res.status(404).send("404 Page Not Found")
})
