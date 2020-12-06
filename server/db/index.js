const mongoose = require('mongoose');
const config = require('../config');

mongoose
    .connect(config.connectionString, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message);
    });

module.exports = mongoose.connection;