//express connection
const router = require('express').Router();

//import Item model
const {Item} = require('../../models');

//get items (....../api/items)
router.get('/', (req,res) => {
    Item.findAll()
    .then(dbItemData => res.json(dbItemData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get item by id (....../api/items/1)
router.get ('/:id', (req,res) =>{
    Item.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbItemData => {
        if (!dbItemData){
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }

        res.json(dbItemData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});

router.delete('/:id', (req, res) => {
    Item.destroy({
     where: {
         id: req.params.id
     }
    })
    .then(dbItemData => {
        if (!dbItemData){
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }

        res.json(dbItemData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});

