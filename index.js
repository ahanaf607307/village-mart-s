const express = require('express')
const app = express()
const cors = require('cors')
require("dotenv").config();
const port = process.env.PORT || 1000;

app.use(cors())
app.use(express.json())

app.get('/' , (req,res) => {
    res.send('Watch Now Server is Running Now')
})
app.listen(port , () => {
    console.log(`Running Port is ${port}`)
})