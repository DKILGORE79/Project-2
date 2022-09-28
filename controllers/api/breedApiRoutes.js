const router = require('express').Router();
const axios = require('axios').default;
const { getDogBreeds } = require('../../utils/dogApi');
router.get('/', async (_req, res) => {
  try {
    const response = await getDogBreeds();

    console.log(response.data);

    res.json(response.data);
  } catch (error) {
    console.error(error);
  }

  res.end();
});

module.exports = router;
