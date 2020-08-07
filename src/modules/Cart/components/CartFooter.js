import React from 'react';
import { ButtonGrey, ButtonMain } from 'components/BlocksUI/Buttons/Buttons';
import Container from 'components/BlocksUI/Container';
import { DeleteIcon } from 'svg/svg';

const CartFooter = () => {
  return (
    <div className="cart__footer">
      <div className="btns-holder">
        <ButtonGrey customClass='btn-del' value={DeleteIcon} />
        <Container>
          12345
        </Container>
        <ButtonMain text='Buy' />
      </div>
    </div>
  );
};

export default CartFooter;