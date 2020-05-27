import React from 'react';

export const ButtonMain = ({ text }) => {
  return (
    <button className="button-mob button-mob_main">
      <span className="btn-text-mob">{text}</span>
    </button>
  );
};