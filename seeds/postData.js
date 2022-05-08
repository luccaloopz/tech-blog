const { Post } = require('../models');

const posts = [
    {
        'title': 'Gaming',
        'post_text': "I love video games, they're so much fun!",
        'user_id': 1
    },
    {
        'title': 'Cycling',
        'post_text': "It's really fun to be able to take your bike and just ride it for hours and hours on a big open road and on a nice sunny day.",
        'user_id': 2
    },
    {
        'title': 'Movies',
        'post_text': "I love to watch movies by myself or with some friends.",
        'user_id': 3
    },
    {
        'title': 'Food',
        'post_text': "I don't have a favorite food or cuisine, I love all types of foods!",
        'user_id': 4
    },
];

const seedPosts = () => Post.bulkCreate(posts);

module.exports = seedPosts;