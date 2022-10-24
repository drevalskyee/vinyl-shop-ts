import React from "react";
import { GalleryItem } from "./GalleryItem/GalleryItem";
import { GalleryItemReverse } from "./GalleryItemReverse/GalleryItemReverse";
import { Gallery, Title } from "./HomePageGallery.styles";

const HomePageGallery = () => (
  <Gallery>
    <Title>gallery</Title>
    <GalleryItem />
    <GalleryItemReverse />
  </Gallery>
);

export { HomePageGallery };
