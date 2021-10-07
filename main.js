const findByDrinkName = require('./find-drink.js');

const main = async () => {
  let drinks = await findByDrinkName('margarita');
  console.log(JSON.stringify(drinks, null, 2));
}

main();

