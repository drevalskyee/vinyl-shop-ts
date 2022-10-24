import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const SidebarNavContainer = styled.div`
  width: 100%;
  height: 100%;
  background: lightblue;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const SidebarNavList = styled.ul`
  width: 100%;
  height: 100%;
`;

export const NavListItem = styled.li`
  list-style: none;
  width: 100%;
  height: 9%;
  /* border: 1px solid black; */
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & a {
    text-decoration: none;
    color: #000;
    cursor: pointer;
    text-transform: capitalize;
    font-size: 1rem;
    transition: 0.2s;

    &:hover {
      text-decoration: underline;
      transition: 0.2s;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-decoration: none;
  text-transform: capitalize;
  color: #6a6a6a;
  transition: 0.3s;
  font-size: 1rem;
  width: 100%;
  cursor: pointer;

  &:hover {
    color: #000000;
    transition: 0.2s;
  }

  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
  }
`;
