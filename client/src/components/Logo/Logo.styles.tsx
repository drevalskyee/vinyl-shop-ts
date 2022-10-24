import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ShopNameContainer = styled.div`
  width: 14%;
  margin-right: 0.9rem;
  font-size: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 1024px) {
    width: 20%;
  }

  @media screen and (max-width: 768px) {
    margin-left: 5rem;
    width: 80%;
  }

  @media screen and (max-width: 480px) {
    /* width: 85%; */
    /* margin-left: 3rem; */
    font-size: 0.5rem;
  }
`;

export const ShopName = styled.h1`
  color: #171616;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }
`;

export const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  cursor: pointer;
`;
