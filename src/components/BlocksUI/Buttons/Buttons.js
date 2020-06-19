import React from 'react';
import { BoxDecor } from '../../Parts/BoxDecor';

export const ButtonMain = ({ text, func, style }) => {
  return (
    <button
      className="button button__main"
      style={style}
      onClick={func}>
      <span>{text}</span>
    </button>
  );
};

export const ButtonDark = ({ text, func }) => {
  return (
    <div className="button">
      <button
        className="button__dark"
        onClick={func}>
        <span>{text}</span>
      </button>
      <BoxDecor />
    </div>
  )
}