import React from 'react';
import { useSelector } from 'react-redux';
import CarouselMenu from 'components/MainMenu/CarouselMenu';

const PageTop = () => {
  const stateContent = useSelector((state) => state.pageTopContent);
  const stateStyle = useSelector((state) => state.pageTopStyle);

  let content = <CarouselMenu />;
  if (typeof stateContent === 'string') {
    content = (<h2 className="page-top__title">{stateContent}</h2>);
  };
  const cssClass = (stateStyle) ? `page-top ${stateStyle}` : 'page-top';

  return <div className={cssClass}>{content}</div>;
};

export default PageTop;