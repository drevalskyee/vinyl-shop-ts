import React, { FC } from "react";
import {
  CartItemContainer,
  CartItemInfo,
  CartItemImage,
  CartItemDescription,
  CartItemAlbumName,
  CartItemArtistName,
  CartItemPriceInfo,
  CartItemPrice,
  CartItemQuantity,
  PlusQuantity,
  MinusQuantity,
  QuantityValue,
  DeleteCartItem,
  CloseItem,
} from "./CartItem.styles";
import { useAppDispatch } from "../../hooks/use-redux-actions";
import {
  ItemFromCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../store/slices/ cartSlice/cartSlice";

interface CartItemProps {
  product: ItemFromCart;
}

const CartItem: FC<CartItemProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  return (
    <CartItemContainer>
      <CartItemInfo>
        <CartItemImage>
          <img src={product.image} alt="" />
        </CartItemImage>
        <CartItemDescription>
          <CartItemAlbumName>{product.album}</CartItemAlbumName>
          <CartItemArtistName>{product.artist}</CartItemArtistName>
        </CartItemDescription>
        <CartItemPriceInfo>
          <CartItemPrice>${product.price}</CartItemPrice>
          <CartItemQuantity>
            <MinusQuantity
              onClick={() => {
                dispatch(decrementQuantity(product));
              }}
            />
            <QuantityValue>{product.quantity}</QuantityValue>
            <PlusQuantity
              onClick={() => dispatch(incrementQuantity(product))}
            />
          </CartItemQuantity>
        </CartItemPriceInfo>
        <DeleteCartItem>
          <CloseItem onClick={() => dispatch(removeFromCart(product))} />
        </DeleteCartItem>
      </CartItemInfo>
    </CartItemContainer>
  );
};

export { CartItem };
