import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.div`
  width: 50%;
  height: 8vh;
  background: #dedede;
  color: #171616;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* background:  lightcoral; */
`;

export const Navlist = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0rem 0.5rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavlistItem = styled.li`
  list-style: none;
  /* background: lightgoldenrodyellow; */
  color: #6a6a6a;
  /* width: 25%; */
  width: 10%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* & a {
        display: inline-block;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        text-decoration: none;
        text-transform: capitalize; */
  /* color: #6a6a6a;
        transition: .3s;
        font-size: 1rem;
        width: 100%;
        cursor: pointer;

        &:hover{
            color: #000000;;
            transition: .2s;
        }

        @media screen and (max-width: 1024px) {
            font-size: .8rem;
    } */
  /* } */
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
