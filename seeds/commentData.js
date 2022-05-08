const { Comment } = require('../models');

const comments = [
    {
        user_id: 1,
        post_id: 2,
        comment_text: "I also love cycling!"
    },
    {
        user_id: 2,
        post_id: 3,
        comment_text: "I also love movies!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "I also love food!"
    },
    {
        user_id: 4,
        post_id: 1,
        comment_text: "I also love gaming!"
    }
];

const seedComments = () => Comment.bulkCreate(comments);

module.exports = seedComments;