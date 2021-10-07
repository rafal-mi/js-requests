import fetch from 'node-fetch';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

async function findDrinkByName(drinkName) {

  const url = BASE_URL + drinkName;
  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }

  let res = await fetch(url, {
    method: 'GET',
    headers: headers,
  });
  let statusCode = res.status;
  let response = await res.json();

  console.log(JSON.stringify(response, null, 2));

  let drinks = [];
  for(let i = 0; i < response.drinks.length; i++) {
    drinks[i] = {};
    drinks[i].drinkId = response.drinks[i].idDrink;
    drinks[i].drinkName = response.drinks[i].strDrink
  }

  return drinks;
}

const main = async () => {
  const drinks = await findDrinkByName('margarita');
  console.log(JSON.stringify(drinks, null, 2));
}

main();

