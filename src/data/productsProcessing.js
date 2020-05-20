import { productsObj, algorithmsSpecies, manufacturerSpecies, equipmentSpecies, coinsSpecies } from './productsData';
export const sortedProducts = { algorithm: {}, manufacturer: {}, equipment: {}, coins: {}, search: {}, byID: {}, byPrice: {}, };
// accomodare items in object by keys as a string that contains all searching field in items [key: element]
const classifyProducts = () => {
  algorithmsSpecies.forEach((item) => {
    sortedProducts.algorithm[item[0]] = {};
  });

  manufacturerSpecies.forEach((item) => {
    sortedProducts.manufacturer[item[0]] = {};
  });

  equipmentSpecies.forEach((item) => {
    sortedProducts.equipment[item[0]] = {};
  });

  coinsSpecies.forEach((item) => {
    sortedProducts.coins[item[0]] = {};
  });

  productsObj.forEach((el) => {
    if (sortedProducts.algorithm[el.algorithm]) {
      sortedProducts.algorithm[el.algorithm][el.id] = el;
    };

    if (sortedProducts.manufacturer[el.manufacturer]) {
      sortedProducts.manufacturer[el.manufacturer][el.id] = el;
    };

    if (sortedProducts.equipment[el.equipment]) {
      sortedProducts.equipment[el.equipment][el.id] = el;
    };

    el.coins.forEach((coin) => {
      if (sortedProducts.coins[coin]) {
        sortedProducts.coins[coin][el.id] = el;
      }
    });

    let hashValueStr = '';
    // byPrice
    el.hash.value.forEach((item) => {
      hashValueStr += String(item.h);

      if (!sortedProducts.byPrice[item.price]) sortedProducts.byPrice[item.price] = [];
      sortedProducts.byPrice[item.price].push(el);
    });
    // search field
    const searchStr = (el.title + ' ' + el.hash.option + ' ' + hashValueStr + ' ' + el.release + ' ' + el.model + ' ' + el.noise + ' ' + String(el.power) + ' ' + el.algorithm + ' ' + el.efficiency + ' ' + el.manufacturer + ' ' + el.equipment).toLowerCase();
    if (!sortedProducts.search[searchStr]) sortedProducts.search[searchStr] = [];
    sortedProducts.search[searchStr].push(el);
    // by ID
    sortedProducts.byID[el.id] = el;
  });
};

classifyProducts();
