const { User } = require('../models');

const users = [
    {
        'username': 'john123',
        'email': 'johndoe@gmail.com',
        'password': 'password1' 
    },
    {
        'username': 'Sam234',
        'email': 'samdoe@gmail.com',
        'password': 'password2'
    },
    {
        'username': 'Sally345',
        'email': 'sallydoe@gmail.com',
        'password': 'password3'
    },
    {
        'username': 'Jane456',
        'email': 'janedoe@gmail.com',
        'password': 'password4'
    }
];

const seedUsers = () => User.bulkCreate(users, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;