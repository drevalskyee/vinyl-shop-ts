import styled from "@emotion/styled";
import { BsFillCartFill } from "react-icons/bs";

export const CartIconContainer = styled.div`
  width: 15%;
  display: flex;
  justify-content: flex-end;
  padding-right: 1rem;
  position: relative;
`;

export const CartIconImage = styled(BsFillCartFill)`
  font-size: 1.5rem;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const CountItems = styled.div`
  position: absolute;
  top: -1px;
  right: 13px;
  width: 17px;
  height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  background: red;
  color: #fff;
  font-size: 0.8rem;

  @media screen and (max-width: 480px) {
    width: 10px;
    height: 10px;
    font-size: 0.5rem;
  }
`;
