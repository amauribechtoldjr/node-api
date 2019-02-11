const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://admin:admin123@ds247698.mlab.com:47698/bechtold-api', {useNewUrlParser: true});

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(3001);