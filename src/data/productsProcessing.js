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

    const searchStr = el.title + el.hash.option + hashValueStr + el.release + el.model + el.noise + String(el.power) + el.algorithm + el.efficiency + el.manufacturer + el.equipment;
    sortedProducts.search[searchStr] = el;

  });
};

classifyProducts();

// async function f() {
//   let promise = Promise.resolve(1);
//   promise.then((res) => console.log('res', res));
// }

// f();

// const load = () => {
//   let i = 0;
//   let start = Date.now();

//   function count() {
//     do {
//       i++;
//       // console.log('i++');
//     } while (i % 1e6 != 0);

//     if (i == 1e9) {
//       alert("Done in " + (Date.now() - start) + 'ms');
//     } else {
//       setTimeout(count); // планируем новый вызов (**)
//     }
//   };

//   count();
//   console.log('done', ("Done in " + (Date.now() - start) + 'ms'));

// };
