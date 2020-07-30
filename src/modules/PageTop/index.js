import React from 'react';
import { useSelector } from 'react-redux';
import CarouselMenu from 'components/CarouselMenu';

const PageTop = () => {
  const pageTopContent = useSelector((state) => state.pageTopContent);
  const stateStyle = useSelector((state) => state.pageTopStyle);

  let content = <CarouselMenu Content={pageTopContent} />;
  if (typeof pageTopContent === 'string') {
    content = (<h2 className="page-top__title">{pageTopContent}</h2>);
  };
  const cssClass = (stateStyle) ? `page-top ${stateStyle}` : 'page-top';

  return <div className={cssClass}>{content}</div>;
};

export default PageTop;