import styled from "@emotion/styled";
import { AiOutlineClose } from "react-icons/ai";

export const CartHeaderContainer = styled.div`
  width: 100%;
  height: 9vh;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
`;

export const CartNameContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1rem;
  /* background: lightblue; */
`;

export const CartText = styled.h3`
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const CloseCartContainerActive = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1rem;
  /* background: lightcoral;  */
`;

export const CloseCartButton = styled(AiOutlineClose)`
  font-size: 1.5rem;
  cursor: pointer;
`;
