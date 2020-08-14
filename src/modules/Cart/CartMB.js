import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setCloseCrossLeft, setCartMenuState, setCarouselData, setSidebarState } from 'store/actions';
import CarouselMenu from 'components/CarouselMenu';
import { setActionData, scrollProcess, onTouchEnd } from 'mod/PageTop/scrollProcess';
import MenuItems from 'mod/MainMenu/MenuItems';
import AccountMenu from 'pages/Account/modules/AccountMenu';
import CartFooter from './components/CartFooter';
import CartEmpty from './components/CartEmpty';

const CartMB = ({ items, totalPrice }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const content = React.createRef();

  const isSidebar = useSelector((state) => state.sidebarState);
  const carouselStyle = useSelector((state) => state.cartMenuState);

  useEffect(() => {
    async function checkSidebar() {
      if (isSidebar) await dispatch(setSidebarState(false));
      dispatch(setCloseCrossLeft(true));
    }
    checkSidebar();

    dispatch(setCarouselData(CartMenu));
    setActionData(setCartMenuState, 'page-top_hide', content.current);
    content.current.addEventListener('scroll', scrollProcess);

    return () => {
      dispatch(setCloseCrossLeft(false));
      const currentPath = history.location.pathname;
      if (currentPath === '/log-in' || currentPath === '/sign-up') dispatch(setCarouselData(AccountMenu));
      else dispatch(setCarouselData(MenuItems));
    }
  }, []);

  return (
    <div className="cart-mob">
      <div
        className="cart__inner"
        ref={content}
        onTouchEnd={onTouchEnd}>
        <div
          className={`page-top ${carouselStyle}`}>
          <CarouselMenu />
        </div>
        <div className="cart__content">
          {(items.length) ?
            (<ul className="item-list">{items}</ul>) :
            <CartEmpty />
          }
        </div>
        <CartFooter totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default CartMB;

const CartMenu = React.forwardRef((props, ref) => (
  <nav>
    <ul className="main-menu__items" ref={ref}>
      <li>cart</li>
      <li>payment success</li>
    </ul>
  </nav>
));