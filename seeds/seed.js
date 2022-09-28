const sequelize = require('../config/connection');
const { User, Names } = require('../models');
const mockData = require('./mockData');

const userData = require('./userData.json');
const names = mockData.map((name) => {
  delete name.id;
  return name;
});

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    console.info('Users Seeded:', users);
    await Names.bulkCreate(names, {
      individualHooks: true,
      returning: true,
    });

    console.log('namesseeded');
    process.exit(0);
  } catch (err) {
    console.log(err);
  }
};

seedDatabase();
