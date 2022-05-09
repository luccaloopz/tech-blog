const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');

router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll();

        res.status(200).json(userData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id);

        if(!userData) {
            res.status(404).json({ message: "No user found with this id!"})
        } else {
            res.status(200).json(userData);
        };
        
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            password: req.body.password
        });

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.password = userData.password;
            req.session.logged_in = true;
            
            res.status(200).json(userData);
        });

        console.log(req.body);
        res.status(200).json(userData);
        
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;