import React from 'react';
import { ButtonGrey, ButtonMain } from 'components/BlocksUI/Buttons/Buttons';
import Container from 'components/BlocksUI/Container';
import { DeleteIcon } from 'svg/svg';

const CartFooter = ({ totalPrice }) => {
  return (
    <div className="cart__footer">
      <div className="btns-holder">
        <ButtonGrey customClass='btn-del' value={DeleteIcon} />
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