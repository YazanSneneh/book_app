'use strict';

// The imports
const express = require('express');
const cors = require('cors');
const superagent = require('superagent');
const path =require('path')
let app = express();
app.use(cors());
app.set('view engine' , 'ejs')
require('dotenv').config();
const PORT = process.env.PORT;

// routes-endPoint
app.get('/' , handelHome);
app.get('/search' , hanelSearch);

app.use(express.static(path.join(__dirname, 'public')));


function handelHome(req, res) {
    res.render('pages/index')

}


function hanelSearch(req , res) {
    res.render('pages/searches/show')
}


app.listen(PORT , () => {
    console.log('server is running perfectly .. ' , PORT)
})