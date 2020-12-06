const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config');
const db = require('./db');
const commentRouter = require('./routes/comment-router');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api', commentRouter);

app.listen(config.port, () => console.log(`Server running on port ${config.port}`));