import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTopContent } from 'store/actions';
import LayoutMain from 'layouts/LayoutMain';
import OnSale from 'mod/OnSale';
import MenuItems from 'mod/MainMenu/MenuItems';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTopContent(MenuItems));
  });

  return (
    <LayoutMain isHomePage={true}>
      <OnSale />
    </LayoutMain>
  );
};

export default Home;