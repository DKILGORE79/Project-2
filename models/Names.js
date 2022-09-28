<<<<<<< HEAD
const { Model, DataTypes } = require('sequelize');
=======
const { Model, DataTypes } = require('sequilize');
>>>>>>> 3a0fd0792c04ad05eead99152bdc09b87a24dd3a
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
    modelName: 'name',
  }
);

module.exports = Names;
