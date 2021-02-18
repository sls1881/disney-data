//Import express library 
const express = require('express')

//Import cors
const cors = require('cors');

//Define out routs for our endpoint
const app = express();

//Import data
const { disneyData } = require('./data.js');

//Add cors... for reasons
app.use(cors());

//We define an endpoint with a path and then callback the request and response
app.get('/disney', (req, res) => {
    res.json({ results: disneyData });
});

app.get('/disney/:id', (req, res) => {
    const id = Number(req.params.id);

    const selectDisney = disneyData.find((disney) => disney.id === id);

    res.json({ results: selectDisney });
});


module.exports = {
    app
};