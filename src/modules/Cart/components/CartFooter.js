import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from 'store/actions';
import { ButtonGrey, ButtonMain } from 'components/BlocksUI/Buttons/Buttons';
import Container from 'components/BlocksUI/Container';
import { DeleteIcon } from 'svg/svg';

const CartFooter = ({ totalPrice }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart__footer">
      <div className="btns-holder">
        <ButtonGrey
          customClass='btn-del'
          value={DeleteIcon} 
          func={() => dispatch(clearCart())}/>
        <Container>
          <div className="price-display">
            ${totalPrice}
          </div>
        </Container>
        <ButtonMain text='Buy' />
      </div>
    </div>
  );
};

export default CartFooter;