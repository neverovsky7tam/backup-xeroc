import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart, setCartState } from 'store/actions';
import { ButtonGrey, ButtonMain } from 'components/BlocksUI/Buttons/Buttons';
import Container from 'components/BlocksUI/Container';
import { DeleteIcon } from 'svg/svg';

const CartFooter = ({ totalPrice }) => {
  const dispatch = useDispatch();

  const CartControls = (
    <div className="btns-holder">
      <ButtonGrey
        customClass='btn-del'
        value={DeleteIcon}
        func={() => dispatch(clearCart())} />
      <Container>
        <div className="price-display">
          ${totalPrice}
        </div>
      </Container>
      <ButtonMain text='Buy' />
    </div>
  );

  const EmptyCartBtn = (
    <ButtonMain
      text={'Back to shopping'}
      func={() => dispatch(setCartState(false))} />
  );

  return (
    <div className="cart__footer">
      {(totalPrice) ?
        CartControls : EmptyCartBtn}
    </div>
  );
};

export default CartFooter;