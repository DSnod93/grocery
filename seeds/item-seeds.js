const {Item} = require('../models');

const itemData = [
    {
        name: 'Fruit Loops',
        image_id: 1,
        price: 4.99,
        description:'fruity tasting cereal',
        category: 'cereal'
    },
    {
        name: 'Honey Bunches of Oats',
        image_id: 2,
        price: 3.99,
        description:'healthier tasting cereal',
        category: 'cereal'  
    },
    {
        name: 'apples',
        image_id: 3,
        price: 0.99,
        description:'an apple that keeps the doctor away!',
        category: 'produce'
    },
    {
        name: 'oranges',
        image_id: 4,
        price: 0.89,
        description:'good to make orange juice or not',
        category: 'produce'
        },
        {
        name: 'milk',
        image_id: 5,
        price: 2.99,
        description:'milk for cereal',
        category: 'dairy'
        },
        {
        name: 'cheese',
        image_id: 6,
        price: 3.99,
        description:'a block of swiss cheese',
        category: 'dairy'
            },
              {
        name: 'hotdog',
        image_id: 7,
        price: 1.99,
        description:'beef hotdog',
        category: 'food court'

    },
    {
            name: 'pizza',
            image_id: 8,
            price: 2.99,
            description:'pepperoni pizza',
            category: 'produce'
        }

];
const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;