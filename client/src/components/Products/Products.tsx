import React, { useState, FC } from "react";
import { ProdutsItem, ApiPath, MerchItem } from "../../types/types";
import {
  ProductsContainer,
  ProductsHeading,
  ButtonContainer,
} from "./Products.styles";
import { ProductsItem } from "./ProductItem/ProductsItem";
import { LoadMoreButton } from "../LoadMoreButton/LoadMoreButton";

interface ProductsProps {
  data: ProdutsItem[] | MerchItem[];
  path: ApiPath;
}

const Products: FC<ProductsProps> = ({ data, path }) => {
  const [visible, setVisible] = useState<number | null>(12);
  const loadMore = () => {
    setVisible((prevValue) => prevValue + 12);
  };

  const renderList = data
    .slice(0, visible)
    .map((product) => (
      <ProductsItem product={product} key={product.id} path={path} />
    ));

  return (
    <>
      <ProductsHeading>Items in category: {data.length}</ProductsHeading>
      <ProductsContainer>{renderList}</ProductsContainer>
      <ButtonContainer>
        <LoadMoreButton buttonText="Load More" loadMore={loadMore} />
      </ButtonContainer>
    </>
  );
};

export { Products };
