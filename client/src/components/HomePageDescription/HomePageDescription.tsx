import React from "react";
import {
  HomePageImage,
  PageDescription,
  Title,
  Info,
} from "./HomePageDescription.styles";
import { IMAGES_LINKS } from "../../images/imagesLinks";

const HomePageDescription = () => {
  return (
    <>
      <HomePageImage>
        <img src={IMAGES_LINKS.DESCRIPTION_PAGE_IMG} alt="" />
      </HomePageImage>
      <PageDescription>
        <Title>The other place</Title>
        <Info>The place where you can find all you need</Info>
      </PageDescription>
    </>
  );
};

export { HomePageDescription };
