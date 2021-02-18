//Import cors
const cors = require('cors');

//Import express library 
const express = require('express')

//Define out routs for our endpoint
const app = express();

//Import data
const { disneyData } = require('./data.js');

//Add cors... for reasons
app.use(cors());

//We define an endpoint with a path and then callback the request and response
app.get('/', (req, res) => {
    res.json('results: home')
})

app.get('/disney', (req, res) => {
    res.json('results: disney')
})

module.exports = {
    app
}