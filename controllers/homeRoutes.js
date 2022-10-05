const router = require('express').Router();
const { getDogBreeds } = require('../utils/dogApi');
const { User } = require('../models');
const { Names } = require('../models');
// const withAuth = require('../utils/auth');

//=================API to call dog info from thedogAPI.com===========================================
router.get('/', async (req, res) => {
  if (!req.session.logged_in) {
    // CHANGE THIS TO WHEREVER YOUR PROJECT NEEDS TO GO
    res.redirect('/login');
    return;
  }

  try {
    const response = await getDogBreeds();

    console.log(response.data);

    res.render('members', {
      dogs: response.data,
    });
  } catch (error) {
    console.error(error);
  }

  res.end();
});
// ==============================================================================================
router.get('/signup', (req, res) => {
  if (req.user) {
    res.render('members');
  }
  res.render('signup');
});

router.get('/login', (req, res) => {
  if (req.user) {
    res.render('members');
  }
  res.render('login');
});

router.get('/', (req, res) => {
  if (req.user) {
    res.render('members');
  }
  res.render('login');
});

router.get('/members', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {id:req.session.user_id},
    });
    // console.log(userData);
    const {data} = await getDogBreeds();
    const dogs = data.slice(0,10);
    res.render('members', {first_name: userData.dataValues.first_name, dogs:dogs});
  } catch (error) {
    console.log(error);
  }
});

// ==================================================================================================
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
    nameArray.push(nameData1.dataValues.dog_name);
    nameArray.push(nameData2.dataValues.dog_name);
    nameArray.push(nameData3.dataValues.dog_name);
    nameArray.push(nameData4.dataValues.dog_name);
    res.render('names', {
      names:nameArray
    });
  } catch (err) {
    console.log(err);
  }
});

router.get('/api/breed', (req, res) => {
  if (req.redirect) {
    // CHANGE THIS TO WHEREVER YOUR PROJECT NEEDS TO GO
    res.redirect('/members');
    return;
  }
  res.render('members');
});

module.exports = router;
