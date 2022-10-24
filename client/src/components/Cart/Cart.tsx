import React, { FC, useEffect } from "react";
import { CartContainer, CartItemsList, ButtonContainer } from "./Cart.styles";
import { CartHeader } from "./CartHeader/CartHeader";
import { useAppSelector, useAppDispatch } from "../../hooks/use-redux-actions";
import { CartItem } from "../CartItem/CartItem";
import { getTotals } from "../../store/slices/ cartSlice/cartSlice";

const Cart: FC = () => {
  const isOpenCart = useAppSelector((state) => state.layout.isOpenCart);
  const cartItems = useAppSelector((state) => state.cart.CartItems);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems]);

  const renderList = cartItems.map((product) => (
    <CartItem key={product.id} product={product} />
  ));

  return (
    <CartContainer isOpenCart={isOpenCart}>
      <CartHeader />
      <CartItemsList>
        {renderList}
        <ButtonContainer />
      </CartItemsList>
    </CartContainer>
  );
};

export { Cart };
