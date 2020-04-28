export const algorithmsSpecies = [['Blake (2b)', 0], ['SHA256', 0], ['X11', 0], ['Scrypt', 0], ['Quark', 0], ['CryptoNight', 0], ['Qubit', 0], ['Myr-Groestl', 0], ['LBRY', 0], ['Skein', 0], ['Blake256R14', 0], ['Pascal', 0], ['Ethash', 0], ['Znash', 0], ['CNHeavy', 0], ['Equihash', 0], ['Lyra2REv2', 0], ['NeoScrypt', 0], ['TimeTravel10', 0], ['Lyra2z', 0], ['PHI2', 0], ['Xevan', 0], ['CryptoNightV7', 0]];
const manufacturerSpecies = ['AMD', 'AsRock', 'Bitmain', 'Innosilicon', 'Canaan', 'Baikal', 'Boundary Electric', 'Sunbelt', 'Whatsminer', 'iBeLink', 'Nvidia', 'Pandaminer', 'Ebit', 'Dayun', 'Bitfury']
const equipmentSpecies = ['ASIC miners', 'Video Cards', 'GPU Enclosures', 'Used rigs', 'Power Supplies', 'Hardware wallets', 'Motherboards', 'Containers', 'Accessories',];
const coinsSpecies = ['bch', 'bsd', 'btc', 'pac', 'pirl', 'ppc', 'ryo', 'start', 'tzc', 'ubq', 'vivo', 'vtc', 'xdn', 'xmcc', 'xmr', 'xmy', 'xvg', 'xzc', 'zcl', 'zec', 'zen', 'nlg', 'music', 'mona', 'ltc', 'kmd', 'hush', 'generic', 'gbx', 'ftc', 'flo', 'exp', 'etp', 'eth', 'etc', 'ella', 'dcr', 'crw', 'btx', 'btg', 'btcp',];

export const productsObj = [
  {
    id: 1,
    title: 'USED Antminer S9',
    hash: {
      option: 'TH/s',
      value: [{ id: 1, h: 18.5, price: '181' }, { id: 2, h: 11.5, price: '145' }, { id: 3, h: 14.1, price: '136.6' }],
    },
    star: 'full',
    psu: true,
    img: '/data/products/img/1.png',
    release: 'Mar 2019',
    model: 'S9',
    noise: '76db',
    power: 2450,
    algorithm: 'Blake (2b)',
    efficiency: '8.00',
    manufacturer: 'AMD',
    equipment: 'ASIC miners',
    coins: ['btc', 'dcr', 'eth', 'lcc'],
  },
  {
    id: 2,
    title: 'Antminer DR5 Extra Strong Power',
    hash: {
      option: 'MH/s',
      value: [{ id: 1, h: 23, price: '1045' }, { id: 2, h: 41, price: '1800' }, { id: 3, h: 39, price: '1560' }, { id: 4, h: 27, price: '1153' }, { id: 5, h: 33, price: '977' }, { id: 6, h: 35, price: '1500' }, { id: 7, h: 31, price: '775' }, { id: 8, h: 41, price: '1960' }, { id: 9, h: 30, price: '1010' }],
    },
    star: 'half',
    psu: false,
    img: '/data/products/img/2.png',
    release: 'Apr 2019',
    model: 'DR5',
    noise: '76db',
    power: 1240,
    algorithm: 'SHA256',
    efficiency: '7.00',
    manufacturer: 'AsRock',
    equipment: 'Video Cards',
    coins: ['btc', 'dcr', 'eth', 'lcc'],
  },
  {
    id: 3,
    title: 'GPU Enclosure',
    hash: {
      option: 'Hashs/s',
      value: [{ id: 1, h: 22, price: '371' }],
    },
    star: 'half',
    psu: false,
    img: '/data/products/img/3.png',
    release: 'Apr 2019',
    model: 'Enclosure',
    noise: '76db',
    power: 3149,
    algorithm: 'SHA-256',
    efficiency: '17.00',
    manufacturer: 'Bitmain',
    equipment: 'ASIC miners',
    coins: ['btc', 'dcr', 'eth', 'lcc'],
  },
  {
    id: 4,
    title: 'Innosilicon A6',
    hash: {
      option: 'PH/s',
      value: [{ id: 1, h: 89, price: '989' }],
    },
    star: false,
    psu: true,
    img: '/data/products/img/4.png',
    release: 'Jun 2017',
    model: 'A6',
    noise: '76db',
    power: 1850,
    algorithm: 'X11',
    efficiency: '2.50',
    manufacturer: 'Canaan',
    equipment: 'Video Cards',
    coins: ['btc', 'dcr', 'eth', 'lcc'],
  },
  {
    id: 5,
    title: 'PandaMiner B3 Pro 4g',
    hash: {
      option: 'KH/s',
      value: [{ id: 1, h: 12, price: '2442' }, { id: 2, h: 16.1, price: '2315' }, { id: 3, h: 19, price: '1989' }],
    },
    star: false,
    psu: false,
    img: '/data/products/img/5.png',
    release: 'Jan 2020',
    model: 'B3',
    noise: '76db',
    power: 1100,
    algorithm: 'Scrypt',
    efficiency: '7.10',
    manufacturer: 'AMD',
    equipment: 'Video Cards',
    coins: ['btc', 'dcr',],
  },
  {
    id: 6,
    title: 'Innosilicon A6',
    hash: {
      option: 'Ksol/s',
      value: [{ id: 1, h: 1.9, price: '376' }],
    },
    star: false,
    psu: true,
    img: '/data/products/img/6.png',
    release: 'Jan 2020',
    model: 'A6',
    noise: '76db',
    power: 1200,
    algorithm: 'Blake (2b)',
    efficiency: '10.70',
    manufacturer: 'Bitmain',
    equipment: 'Motherboards',
    coins: ['btc', 'music',],
  },
  {
    id: 7,
    title: 'GPU Enclosure',
    hash: {
      option: 'GH/s',
      value: [{ id: 1, h: 1.2, price: '672' }, { id: 2, h: 5.0, price: '840' }, { id: 3, h: 1.9, price: '376' }, { id: 4, h: 2.3, price: '290' },],
    },
    star: 'full',
    psu: false,
    img: '/data/products/img/7.png',
    release: 'Dec 2018',
    model: 'Enclosure',
    noise: '76db',
    power: 1350,
    algorithm: 'X11',
    efficiency: '10.70',
    manufacturer: 'Bitmain',
    equipment: 'Motherboards',
    coins: ['btc', 'dcr', 'eth', 'lcc'],
  },
  {
    id: 8,
    title: 'Innosilicon T3',
    hash: {
      option: 'H/s',
      value: [{ id: 1, h: 913, price: '5376' }],
    },
    star: false,
    psu: true,
    img: '/data/products/img/8.png',
    release: 'Feb 2016',
    model: 'T3',
    noise: '76db',
    power: 1950,
    algorithm: 'Quark',
    efficiency: '4.70',
    manufacturer: 'AsRock',
    equipment: 'ASIC miners',
    coins: ['bch', 'bsd', 'btc', 'pac', 'pirl', 'ppc', 'ryo', 'start', 'tzc', 'ubq', 'vivo', 'vtc', 'xdn', 'xmcc', 'xmr', 'xmy', 'xvg', 'xzc', 'zcl', 'zec', 'zen', 'nlg', 'music', 'mona', 'ltc', 'kmd', 'hush', 'generic', 'gbx', 'ftc', 'flo', 'exp', 'etp', 'eth', 'etc', 'ella', 'dcr', 'crw', 'btx', 'btg', 'btcp',],
  },
  {
    id: 9,
    title: 'Antminer Z9 Mini',
    hash: {
      option: 'MH/s',
      value: [{ id: 1, h: 230, price: '2209' }],
    },
    star: 'half',
    psu: false,
    img: '/data/products/img/9.png',
    release: 'Feb 2020',
    model: 'Z9',
    noise: '76db',
    power: 1950,
    algorithm: 'Quark',
    efficiency: '11.00',
    manufacturer: 'Baikal',
    equipment: 'ASIC miners',
    coins: ['btc', 'dcr', 'eth', 'lcc'],
  },
  {
    id: 10,
    title: 'APW3++',
    hash: {
      option: 'Hashs/s',
      value: [{ id: 1, h: 19.5, price: '103' }],
    },
    star: false,
    psu: false,
    img: '/data/products/img/10.png',
    release: 'Apr 2019',
    model: 'T3',
    noise: '76db',
    power: 1110,
    algorithm: 'CryptoNightV7',
    efficiency: '7.90',
    manufacturer: 'Canaan',
    equipment: 'Motherboards',
    coins: ['bch', 'bsd', 'btc', 'pac', 'pirl', 'ppc', 'ryo', 'start', 'tzc', 'ubq', 'vivo', 'vtc', 'xdn', 'xmcc', 'xmr', 'xmy', 'xvg',],
  },
  {
    id: 11,
    title: 'Innosilicon A11',
    hash: {
      option: 'GH/s',
      value: [{ id: 1, h: 1.23, price: '3240' }],
    },
    star: false,
    psu: false,
    img: '/data/products/img/11.png',
    release: 'Aug 2016',
    model: 'A11',
    noise: '76db',
    power: 1550,
    algorithm: 'CryptoNight',
    efficiency: '23.70',
    manufacturer: 'AsRock',
    equipment: 'ASIC miners',
    coins: ['xzc', 'zcl', 'zec', 'zen', 'nlg', 'music', 'mona', 'ltc', 'kmd', 'hush', 'generic', 'gbx', 'ftc', 'flo', 'exp', 'etp', 'eth', 'etc', 'ella', 'dcr', 'crw', 'btx', 'btg', 'btcp',],
  },
  {
    id: 12,
    title: 'Dayun Zig Z1+',
    hash: {
      option: 'PH/s',
      value: [{ id: 1, h: 7.2, price: '1242' }],
    },
    star: false,
    psu: false,
    img: '/data/products/img/12.png',
    release: 'Okt 2020',
    model: 'Zig Z1+',
    noise: '76db',
    power: 1150,
    algorithm: 'CryptoNight',
    efficiency: '12.00',
    manufacturer: 'Baikal',
    equipment: 'Video Cards',
    coins: ['btc', 'dcr', 'eth', 'lcc', 'ella', 'dcr', 'crw', 'btx', 'btg', 'btcp',],
  },
  {
    id: 13,
    title: 'Antminer S5',
    hash: {
      option: 'TH/s',
      value: [{ id: 1, h: 55, price: '535' }, { id: 2, h: 59, price: '700' }],
    },
    star: 'half',
    psu: true,
    img: '/data/products/img/14.png',
    release: 'Aug 2019',
    model: 'S5',
    noise: '76db',
    power: 950,
    algorithm: 'Qubit',
    efficiency: '9.00',
    manufacturer: 'Innosilicon',
    equipment: 'Used rigs',
    coins: ['btc', 'eth', 'etc', 'ella', 'dcr', 'crw', 'btx', 'btg', 'btcp',],
  },
  {
    id: 14,
    title: 'GPU Enclosure',
    hash: {
      option: 'Ksol/s',
      value: [{ id: 1, h: 5, price: '1535' }],
    },
    star: false,
    psu: true,
    img: '/data/products/img/15.png',
    release: 'Feb 2016',
    model: 'Enclosure',
    noise: '76db',
    power: 1200,
    algorithm: 'Quark',
    efficiency: '10.00',
    manufacturer: 'Bitmain',
    equipment: 'GPU Enclosures',
    coins: ['btc', 'dcr', 'eth', 'lcc', 'tzc', 'ubq', 'vivo', 'vtc', 'xdn', 'xmcc', 'xmr', 'xmy', 'xvg', 'xzc', 'zcl', 'zec', 'zen', 'nlg', 'music', 'mona', 'ltc',],
  },
];

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

  // console.log('sortedProducts', sortedProducts);
  // console.log('equipmentSpecies', [...equipmentSpecies]);
};
classifyProducts();
