import styled from "@emotion/styled";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const CartItemContainer = styled.div`
  width: 100%;
  height: 85px;
  border-bottom: 0.5px solid #9e9e9e;
  background: lightblue;
`;

export const CartItemInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

export const CartItemImage = styled.div`
  width: 15%;
  height: 33%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 0.5rem;
  /* background: #c5c528; */

  & img {
    width: 50px;
    height: 50px;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 40px;
      height: 40px;
      margin-right: 2rem;
    }
  }

  @media screen and (max-width: 768px) {
    width: 18%;
  }
`;

export const CartItemDescription = styled.div`
  width: 30%;
  height: 100%;
  /* background: lightskyblue; */
`;

export const CartItemAlbumName = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.9rem;

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const CartItemArtistName = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.8rem;

  @media screen and (max-width: 768px) {
    font-size: 0.65rem;
  }
`;

export const CartItemPriceInfo = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  /* background: lightpink; */
`;

export const CartItemPrice = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
  /* background: lightgreen;  */
`;

export const CartItemQuantity = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
  }
  /* border: 1px solid black; */
  /* background: lightgreen; */
`;

export const PlusQuantity = styled(AiOutlinePlus)`
  width: 33%;
  height: 100%;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    transform: scale(2);
  }

  /* background: #9e9e9e; */
`;

export const MinusQuantity = styled(AiOutlineMinus)`
  width: 33%;
  height: 100%;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    transform: scale(2);
  }
  /* background: #9e9e9e; */
`;

export const QuantityValue = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

export const DeleteCartItem = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: lightblue; */
`;

export const CloseItem = styled(AiOutlineClose)`
  cursor: pointer;
  font-size: 1.3rem;
`;
