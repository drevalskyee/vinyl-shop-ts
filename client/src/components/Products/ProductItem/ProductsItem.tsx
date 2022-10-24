import React, { FC, useEffect } from "react";
import { ProdutsItem, ApiPath } from "../../../types/types";
import {
  ProductsItemContainer,
  ProductImageContainer,
  ProductInfo,
  AlbumName,
  ArtistName,
  ItemOverlay,
  StyledLink,
} from "./ProductsItem.styles";

interface ProdustItemProps {
  product: ProdutsItem;
  path: ApiPath;
}

const ProductsItem: FC<ProdustItemProps> = ({ product, path }) => {
  return (
    <ProductsItemContainer>
      <ItemOverlay>${product.price}</ItemOverlay>
      <ProductImageContainer>
        <StyledLink to={`/api/${path.path}/${product.id}`}>
          <img src={product.image} alt={product.album} />
        </StyledLink>
      </ProductImageContainer>
      <ProductInfo>
        <AlbumName>
          <StyledLink to={`/${path.path}/${product.id}`}>
            <p>{product.album}</p>
          </StyledLink>
        </AlbumName>
        <ArtistName>
          <p>{product.artist}</p>
        </ArtistName>
      </ProductInfo>
    </ProductsItemContainer>
  );
};
export { ProductsItem };
