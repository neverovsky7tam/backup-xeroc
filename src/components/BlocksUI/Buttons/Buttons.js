import React from 'react';

export const ButtonMain = ({ text, func }) => {
  return (
    <button className="button button__main" onClick={func}>
      <span>{text}</span>
    </button>
  );
};