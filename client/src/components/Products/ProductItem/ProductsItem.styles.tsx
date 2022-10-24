import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ProductsItemContainer = styled.div`
  width: 200px;
  height: 250px;
  /* background: lightcyan; */
  border: 1px solid #9e9e9e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
`;

export const ProductImageContainer = styled.div`
  width: 100%;
  height: 80%;
  margin: 0 auto;
  cursor: pointer;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductInfo = styled.div`
  width: 100%;
  height: 20%;
  /* background: lightcyan; */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const AlbumName = styled.div`
  width: 100%;
  height: 60%;
  padding-left: 0.5rem;
  font-size: 0.8rem;
  padding-top: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & p {
    cursor: pointer;
  }
`;

export const ArtistName = styled.div`
  width: 100%;
  height: 40%;
  padding-left: 0.5rem;
  font-size: 0.7em;
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & p {
    cursor: pointer;
  }
`;

export const ItemOverlay = styled.div`
  width: 100%;
  height: 10%;
  background: black;
  opacity: 1;
  position: absolute;
  top: 0;
  color: #9e9e9e;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 0.5rem;
  cursor: text;

  &::selection {
    background: #9e9e9e;
    color: #000;
  }
`;

export const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
`;
