const axios = require('axios');

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

module.exports = async function findByDrinkName(drinkName) {

  const url = BASE_URL + drinkName;

  let response = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  });

  const statusCode = response.status;
  console.log(statusCode);

  const data = response.data;
  // console.log(JSON.stringify(data, null, 2));

  let drinks = [];
  for(let i = 0; i < data.drinks.length; i++) {
    drinks[i] = {};
    drinks[i].drinkId = data.drinks[i].idDrink;
    drinks[i].drinkName = data.drinks[i].strDrink
  }

  return drinks;
}

