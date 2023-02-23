const express = require('express');
const path = require('path');


const app = express();

//enable body parser

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./routes/openairoutes'));
