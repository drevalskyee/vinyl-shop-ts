import React from "react";
import {
  CartHeaderContainer,
  CartNameContainer,
  CartText,
  CloseCartContainerActive,
  CloseCartButton,
} from "./CartHeader.styles";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/use-redux-actions";
import { toggleCart } from "../../../store/slices/layoutSlice/layoutSlice";

const CartHeader = () => {
  const totalAmount = useAppSelector((state) => state.cart.cartTotalAmount);
  const dispatch = useAppDispatch();

  return (
    <CartHeaderContainer>
      <CartNameContainer>
        <CartText>Total: ${totalAmount}</CartText>
      </CartNameContainer>
      <CloseCartContainerActive>
        <CloseCartButton onClick={() => dispatch(toggleCart())} />
      </CloseCartContainerActive>
    </CartHeaderContainer>
  );
};

export { CartHeader };
