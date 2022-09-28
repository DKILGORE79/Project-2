const router = require('express').Router();
const { getDogBreeds } = require('../utils/dogApi');
// const { User } = require('../models');
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

module.exports = router;
