import { productsObj, algorithmsSpecies, manufacturerSpecies, equipmentSpecies, coinsSpecies } from './productsData';
export const sortedProducts = { algorithm: {}, manufacturer: {}, equipment: {}, coins: {}, search: {}, byID: {}, };

const classifyProducts = () => {
  algorithmsSpecies.forEach((item) => {
    sortedProducts.algorithm[item[0]] = {};
  });

  manufacturerSpecies.forEach((item) => {
    sortedProducts.manufacturer[item] = {};
  });

  equipmentSpecies.forEach((item) => {
    sortedProducts.equipment[item] = {};
  });

  coinsSpecies.forEach((item) => {
    sortedProducts.coins[item] = {};
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

    if (sortedProducts.coins[el.coins]) {
      sortedProducts.coins[el.coins][el.id] = el;
    };

    // accomodare items in object by keys as a string that contains all searching field in items [key: element]
    let hashValueStr = '';
    el.hash.value.forEach((item) => {
      hashValueStr += String(item.h);
    });

    const searchStr = (el.title + ' ' + el.hash.option + ' ' + hashValueStr + ' ' + el.release + ' ' + el.model + ' ' + el.noise + ' ' + String(el.power) + ' ' + el.algorithm + ' ' + el.efficiency + ' ' + el.manufacturer + ' ' + el.equipment + ' ' + el.id).toLowerCase();
    sortedProducts.search[searchStr] = el;

    sortedProducts.byID[el.id] = el;
  });
  console.log('sortedProducts', sortedProducts);
};

classifyProducts();
