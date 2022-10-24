import styled from "@emotion/styled";

export const CartContainer = styled.div<{ isOpenCart: boolean }>`
  width: 40%;
  min-height: 100%;
  //prev version
  /* overflow: scroll; */
  overflow: auto;
  z-index: 100000;
  background: #dedede;
  position: fixed;
  top: 0;
  right: -100%;
  right: ${({ isOpenCart }) => (isOpenCart ? "0%" : "-100%")};
  transition: 0.4s;
  box-shadow: -1px 0 5px 0 #000;

  @media screen and (max-width: 768px) {
    width: 50%;
  }

  @media screen and (max-width: 500px) {
    width: 70%;
  }
`;

export const CartItemsList = styled.div`
  width: 100%;
  height: 85vh;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
