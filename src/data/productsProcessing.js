import { productsObj, algorithmsSpecies, manufacturerSpecies, equipmentSpecies, coinsSpecies } from './productsData';
export const sortedProducts = {};

const classifyProducts = () => {
  algorithmsSpecies.forEach((item) => {
    sortedProducts[item[0]] = {};
  });

  manufacturerSpecies.forEach((item) => {
    sortedProducts[item] = {};
  });

  equipmentSpecies.forEach((item) => {
    sortedProducts[item] = {};
  });

  coinsSpecies.forEach((item) => {
    sortedProducts[item] = {};
  });

  sortedProducts.search = {};
  sortedProducts.byID = {};

  productsObj.forEach((el) => {
    if (sortedProducts[el.algorithm]) {
      sortedProducts[el.algorithm][el.id] = el;
    };

    if (sortedProducts[el.manufacturer]) {
      sortedProducts[el.manufacturer][el.id] = el;
    };

    if (sortedProducts[el.equipment]) {
      sortedProducts[el.equipment][el.id] = el;
    };

    if (sortedProducts[el.coins]) {
      sortedProducts[el.coins][el.id] = el;
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
};

classifyProducts();
