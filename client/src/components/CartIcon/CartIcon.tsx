import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/use-redux-actions";
import {
  CartIconContainer,
  CartIconImage,
  CountItems,
} from "./CartIcon.styles";
import { toggleCart } from "../../store/slices/layoutSlice/layoutSlice";

const CartIcon: FC = () => {
  const CartItems = useAppSelector((state) => state.cart.CartItems);

  const dispatch = useAppDispatch();
  return (
    <CartIconContainer onClick={() => dispatch(toggleCart())}>
      <CartIconImage />
      <CountItems>{CartItems.length}</CountItems>
    </CartIconContainer>
  );
};

export { CartIcon };
