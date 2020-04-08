import React from 'react';

export const hideDecor = (elem, action) => {
  elem.current.style.display = action;
}

export const BoxDecor = React.forwardRef((props, ref) => {
  return (
    <div className="box-decor" ref={ref}>
      <div className="corner-top-left"></div>
      <div className="corner-top-right"></div>
      <div className="corner-bottom-left"></div>
      <div className="corner-bottom-right"></div>
    </div>
  )
});

// export const BoxDecorThick = () => {
//   return (
//     <>
//       <div className="corner-top-left-thick"></div>
//       <div className="corner-top-right-thick"></div>
//       <div className="corner-bottom-left-thick"></div>
//       <div className="corner-bottom-right-thick"></div>
//     </>
//   )
// }