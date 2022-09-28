const { Model, DataTypes } = require('sequilize');
const sequelize = require('../config/connection');

class Breed extends Model {}

Breed.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    temperament: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    life_span: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTablename: true,
    underscored: true,
    modelName: 'breed',
  }
);

module.exports = Breed;
