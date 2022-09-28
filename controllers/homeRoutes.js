const router = require('express').Router();
<<<<<<< HEAD
const { Names } = require('../models');
=======
const { getDogBreeds } = require('../utils/dogApi');
// const { User } = require('../models');
>>>>>>> 3a0fd0792c04ad05eead99152bdc09b87a24dd3a
// const withAuth = require('../utils/auth');

router.get('/', async (_req, res) => {
  if (!req.session.logged_in) {
    // CHANGE THIS TO WHEREVER YOUR PROJECT NEEDS TO GO
    res.redirect('/login');
    return;
  }

  try {
    const response = await getDogBreeds();

    console.log(response.data);

    res.render('homepage', {
      dogs: response.data,
    });
  } catch (error) {
    console.error(error);
  }

  res.end();
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    // CHANGE THIS TO WHEREVER YOUR PROJECT NEEDS TO GO
    res.redirect('/logged_in_hompage');
    return;
  }
  res.render('login');
});

router.get('/names', async (req, res) => {
  const randomId1 = Math.floor(Math.random()*1000+1);
  const randomId2 = Math.floor(Math.random()*1000+1);
  const randomId3 = Math.floor(Math.random()*1000+1);
  const randomId4 = Math.floor(Math.random()*1000+1);
  const nameArray = [];
  try {
    const nameData1 = await Names.findOne({
      where: {
        id: randomId1,
      }
    });
    const nameData2 = await Names.findOne({
      where: {
        id: randomId2,
      }
    });
    const nameData3 = await Names.findOne({
      where: {
        id: randomId3,
      }
    });
    const nameData4 = await Names.findOne({
      where: {
        id: randomId4,
      }
    });
    nameArray.push(nameData1.dataValues.first_name);
    nameArray.push(nameData2.dataValues.first_name);
    nameArray.push(nameData3.dataValues.first_name);
    nameArray.push(nameData4.dataValues.first_name);
    res.render('names', {
      names:nameArray
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
