const { Model, DataTypes } = require('sequilize');
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

    first_name: {
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

module.exports = Names;
