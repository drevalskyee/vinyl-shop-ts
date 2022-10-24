import React from "react";
import {
  ReversedGalleryItemContainer,
  GalleryItemImage,
  GalleryItemDescription,
  Heading,
  DescriptionText,
} from "./GalleryItemReverse.styles";
import { IMAGES_LINKS } from "../../../images/imagesLinks";

const GalleryItemReverse = () => (
  <ReversedGalleryItemContainer>
    <GalleryItemDescription>
      <Heading>A large assortment</Heading>
      <DescriptionText>
        In our store you can find vinyl of any genre of music: hip-hop, funk,
        rock, electronics, ambient and others
      </DescriptionText>
    </GalleryItemDescription>
    <GalleryItemImage>
      <img src={IMAGES_LINKS.GALERY_ITEM_IMG_2} alt="" />
    </GalleryItemImage>
  </ReversedGalleryItemContainer>
);

export { GalleryItemReverse };
