const express = require('express');
const router = require('./router');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors({
  origin: '*'
}));

app.use('/uploads',express.static('uploads'));

app.use(router);
module.exports = app;