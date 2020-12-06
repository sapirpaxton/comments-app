const Comment = require('../models/comment-model');

createComment = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a comment',
        })
    }

    const comment = new Comment(body);

    if (!comment) {
        return res.status(400).json({ success: false, error: err })
    }

    comment
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: comment._id,
                message: 'Comment created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Comment not created!',
            })
        })
};

getComments = async (req, res) => {
    await Comment.find({}, (err, comments) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!comments.length) {
            return res
                .status(404)
                .json({ success: false, error: `Comment not found` })
        }
        return res.status(200).json({ success: true, data: comments })
    }).catch(err => {
        return res.status(400).json({
            err,
            message: 'Failed to get comments',
        })
    })
};

module.exports = {
    createComment,
    getComments,
};