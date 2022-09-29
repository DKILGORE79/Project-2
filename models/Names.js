const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Names extends Model {}

Names.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    dog_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTablename: true,
    underscored: true,
    modelName: 'name',
  }
);

module.exports = Names;
