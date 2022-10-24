import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProdutsItem, ApiPath } from "../../types/types";
import {
  ProductContainer,
  ImageContainer,
  DescriptionContainer,
  AlbumInfo,
  ArtistName,
  AlbumName,
  AlbumPrice,
  AblumYear,
  ButtonContainer,
  BoldText,
} from "./ProductsDetails.styles";
import { Button } from "../Button/Button";
import { useAppDispatch } from "../../hooks/use-redux-actions";
import { closeSidebarAndCart } from "../../store/slices/layoutSlice/layoutSlice";
import { addToCart } from "../../store/slices/ cartSlice/cartSlice";

interface ProductsDetailsProps {
  path: ApiPath;
}

const ProductsDetails: FC<ProductsDetailsProps> = ({ path }) => {
  const [product, setProduct] = useState<ProdutsItem | null>(null);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const fetchProductData = async () => {
    try {
      const response = await axios.get<ProdutsItem>(
        `http://localhost:3001/api/${path.path}/${id}`
      );
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  const handleAddToCart = (item: ProdutsItem) => {
    dispatch(addToCart(item));
  };

  return (
    <ProductContainer onClick={() => dispatch(closeSidebarAndCart())}>
      <ImageContainer>
        <img src={product?.image} alt={product?.album} />
      </ImageContainer>
      <AlbumInfo>
        <DescriptionContainer>
          <ArtistName>
            <BoldText>Artist:</BoldText> {product?.artist}
          </ArtistName>
          <AlbumName>
            <BoldText>Album:</BoldText> {product?.album}
          </AlbumName>
          <AblumYear>
            <BoldText>Year:</BoldText>
            {product?.year}
          </AblumYear>
          <AlbumPrice>
            <BoldText>Price: $</BoldText> {product?.price}
          </AlbumPrice>
        </DescriptionContainer>
        <ButtonContainer>
          <Button
            onClick={handleAddToCart}
            buttonText="Add to Cart"
            product={product}
          />
        </ButtonContainer>
      </AlbumInfo>
    </ProductContainer>
  );
};

export { ProductsDetails };
