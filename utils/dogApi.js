const axios = require('axios').default;

async function getDogBreeds() {
  try {
    const response = await axios.get(
      'https://api.thedogapi.com/v1/breeds?limit=1&api_key=live_cQiU4cqIV83xz7K3JU3MOVdomTvsQbrA8KvPhDT6dqQXDCAiDvRqLMO7rKNmhz9q'
    );

    return response;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getDogBreeds };
