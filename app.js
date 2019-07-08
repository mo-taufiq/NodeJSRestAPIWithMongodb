const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();
const postsRoute = require('./routes/posts');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

app.use('/posts', postsRoute);

app.get('/', (req, res) => {
    res.send('We are on home');
});

// connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('connected to db!')
});


app.listen(3000);