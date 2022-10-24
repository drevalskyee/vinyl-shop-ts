import styled from "@emotion/styled";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export const SidebarHeaderContainer = styled.div`
  width: 100%;
  height: 9.1%;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SidebarNameContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1rem;
  /* background: lightblue; */
`;

export const ShopNameSidebar = styled.h3`
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const CloseSidebarContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1rem;
  /* background: lightcoral;  */
`;

export const CloseSidebarButton = styled(AiOutlineClose)`
  font-size: 1.5rem;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  cursor: pointer;
`;
