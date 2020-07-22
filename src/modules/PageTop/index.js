import React from 'react';
import { useSelector } from 'react-redux';
import CarouselMenu from 'components/MainMenu/CarouselMenu';

const PageTop = () => {
  const pageTopContent = useSelector((state) => state.pageTopState.content);
  const pageTopAdditionCssClass = useSelector((state) => state.pageTopState.additionCssClass);

  let content = <CarouselMenu />;
  if (typeof pageTopContent === 'string') {
    content = (<h2 className="page-top__title">{pageTopContent}</h2>);
  };
  const cssClass = (pageTopAdditionCssClass) ? `page-top ${pageTopAdditionCssClass}` : 'page-top';

  return <div className={cssClass}>{content}</div>;
};

export default PageTop;