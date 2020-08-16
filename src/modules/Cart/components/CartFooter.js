import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, setCartState } from 'store/actions';
import { ButtonGrey, ButtonMain } from 'components/BlocksUI/Buttons/Buttons';
import Container from 'components/BlocksUI/Container';
import { DeleteIcon } from 'svg/svg';

const CartFooter = () => {
  const dispatch = useDispatch();

  const invoice = useSelector((state) => state.itemsInCart.totalPrice);

  const cartControls = (
    <div className="btns-holder">
      <ButtonGrey
        customClass='btn-del'
        value={DeleteIcon}
        func={() => dispatch(clearCart())} />
      <Container>
        <div className="price-display">
          ${invoice}
        </div>
      </Container>
      <ButtonMain text='Buy' />
    </div>
  );

  const emptyCartBtn = (
    <ButtonMain
      text={'Back to shopping'}
      func={() => dispatch(setCartState(false))} />
  );

  return (
    <div className="cart__footer">
      {(invoice) ?
        cartControls : emptyCartBtn}
    </div>
  );
};

export default CartFooter;