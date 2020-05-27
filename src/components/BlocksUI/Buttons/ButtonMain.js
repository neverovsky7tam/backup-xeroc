import React from 'react';

export const ButtonMain = ({ text, func }) => {
  return (
    <button className="button-mob button-mob_main" onClick={func}>
      <span className="btn-text-mob">{text}</span>
    </button>
  );
};