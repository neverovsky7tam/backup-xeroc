import React from 'react';
import { BoxDecor } from 'components/Parts/BoxDecor';
import { hideDecor } from 'components/Parts/BoxDecor';

export const ButtonMain = ({ text, func, style, children }) => {
  let content = (text) ? <span>{text}</span> : children;

  return (
    <button
      className="button button__main"
      style={style}
      onClick={func}>
      {content}
    </button>
  );
};

export const ButtonDark = ({ text, func, wrapperStyle, btnStyle, children }) => {
  const boxDecor = React.createRef();
  let content = (text) ? <span>{text}</span> : children;

  return (
    <div className="p-relative" style={wrapperStyle}>
      <button
        className="button button__dark"
        style={btnStyle}
        onClick={func}
        onMouseEnter={() => hideDecor(boxDecor, 'none')}
        onMouseLeave={() => hideDecor(boxDecor, '')}>
        {content}
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
