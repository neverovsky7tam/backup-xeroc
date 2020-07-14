import React from 'react';
import { BoxDecor } from '../../Parts/BoxDecor';
import { hideDecor } from '../../Parts/BoxDecor';

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

export const ButtonDark = ({ text, func, wrapperStyle, btnStyle }) => {
  const boxDecor = React.createRef();

  return (
    <div className="p-relative" style={wrapperStyle}>
      <button
        className="button button__dark"
        style={btnStyle}
        onClick={func}
        onMouseEnter={() => hideDecor(boxDecor, 'none')}
        onMouseLeave={() => hideDecor(boxDecor, '')}>
        <span>{text}</span>
      </button>
      <BoxDecor ref={boxDecor} />
    </div>
  );
};

export const SquareBtn = React.forwardRef(({ icon, func }, btn) => {
  const onClick = () => {
    if (btn) btn.current.classList.toggle('square-btn_active');
    func();
  };

  return (
    <button
      className="square-btn"
      ref={btn}
      onClick={onClick}>
      {icon}
    </button>
  );
});