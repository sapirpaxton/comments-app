const mongoose = require('mongoose');

const Comments = mongoose.Schema({
        email: { type: String, required: true },
        message: { type: String }
    },
    { timestamps: true });

module.exports = mongoose.model('comments', Comments);