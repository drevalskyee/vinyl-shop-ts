import styled from "@emotion/styled";
import { HiOutlineMenu } from "react-icons/hi";

export const MenuIconContainer = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -20px;
    left: -80px;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    width: 55px;
    height: 55px;
  }
`;

export const Icon = styled(HiOutlineMenu)`
  font-size: 2rem;
`;
