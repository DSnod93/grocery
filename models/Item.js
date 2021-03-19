const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Item extends Model {}

// create fields/columns for Item model
Item.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true
        }
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate: {
          isDecimal: true
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      }
    ,
    category: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'Item'
    }
  );

  module.exports = Item;