import React from 'react';

const AlgorithmFilter = ({data}) => {
  const algorithmsSpecies = ['Blake (2b)', 'SHA256', 'X11', 'Scrypt', 'Quark', 'CryptoNight', 'Qubit', 'Myr-Groestl', 'LBRY', 'Skein', 'Blake256R14', 'Pascal', 'Ethash', 'Znash', 'CNHeavy', 'Equihash', 'Lyra2REv2', 'NeoScrypt', 'TimeTravel10', 'Lyra2z', 'PHI2', 'Xevan', 'CryptoNightV7'];

  return (
    <p className="filter-items-wrapper">Hello world!!!</p>
  )
  // const items = data.map((el) => {
  //   return (
  //     <li>

  //     </li>
  //   )
  // });

  // return (
  //   <ul className="filter-items-wrapper">
  //     {items}
  //   </ul>
  // )
}

export default AlgorithmFilter;