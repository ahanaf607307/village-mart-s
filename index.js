const express = require('express')
const app = express()
const cors = require('cors')
require("dotenv").config();
const port = process.env.PORT || 1000;

app.use(cors())
app.use(express.json())

// MONGODB START

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.pa9nk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
//    crud operation starts

//    crud operation ends
  } finally {
   
  }
}
run().catch(console.dir);

// MONGODB ENDS


app.get('/' , (req,res) => {
    res.send('Watch Now Server is Running Now')
})
app.listen(port , () => {
    console.log(`Running Port is ${port}`)
})