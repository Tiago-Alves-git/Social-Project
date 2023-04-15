const express = require('express');
const router = require('./router');
const cors = require('cors');

const maxRequestBodySize = '2mb';


const app = express();
app.use(express.json({limit: maxRequestBodySize}));
app.use(express.urlencoded({limit: maxRequestBodySize, extended: true }));


app.use(cors({
  origin: '*'
}));

app.use(router);
module.exports = app;