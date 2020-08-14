import React from 'react';
import Container from 'components/BlocksUI/Container';
import { NotFound } from 'svg/svg';

const CartEmpty = () => {
	return (
		<div className="cart-empty">
			<Container>
				<div className="content">
					{NotFound}
					<span className="main-font">You have 0 items in your cart</span>
				</div>
			</Container>
		</div>
	);
};

export default CartEmpty;