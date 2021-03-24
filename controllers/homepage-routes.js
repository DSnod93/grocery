const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Item } = require('../models');

router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({
        attributes: [
            'name',
            'image_id',
            'price',
            'description',
            'category',
        ],
        include: [
            {
                model: Item,
                attributes: ['name', 'image_id', 'price', 'description', 'category'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));

            res.render('homepage', {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'name',
            'image_id',
            'price',
            'description',
            'category',
        ],
        include: [
            {
                model: Item,
                attributes: ['name', 'image_id', 'price', 'description', 'category'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }

            const post = dbPostData.get({ plain: true });

            res.render('single-item', {
                post,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});


module.exports = router;
