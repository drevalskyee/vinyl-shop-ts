import React from "react";
import {
  GalleryItemContainer,
  GalleryItemImage,
  GalleryItemDescription,
  Heading,
  DescriptionText,
} from "./GalleryItem.styles";
import { IMAGES_LINKS } from "../../../images/imagesLinks";

const GalleryItem = () => (
  <GalleryItemContainer>
    <GalleryItemImage>
      <img src={IMAGES_LINKS.GALERY_ITEM_IMG_1} alt="" />
    </GalleryItemImage>
    <GalleryItemDescription>
      <Heading>We love music</Heading>
      <DescriptionText>
        Vinyl is our passion, so the quality of our product is top notch
      </DescriptionText>
    </GalleryItemDescription>
  </GalleryItemContainer>
);

export { GalleryItem };
