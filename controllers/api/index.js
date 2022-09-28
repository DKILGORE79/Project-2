const router = require('express').Router();
const userRoutes = require('./userRoutes');
const breedApi = require('./breedApiRoutes');

router.use('/users', userRoutes);
router.use('/breed', breedApi);

module.exports = router;
