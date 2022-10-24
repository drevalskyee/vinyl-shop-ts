import React from "react";
import {
  VisitUsContainer,
  AddressContainer,
  Title,
  Address,
  ShopPhotoContainer,
  AddressTitle,
  AddressTDescription,
} from "./VisitUs.styles";
import { IMAGES_LINKS } from "../../images/imagesLinks";

const VisitUs = () => (
  <VisitUsContainer>
    <Title>our shop</Title>
    <AddressContainer>
      <ShopPhotoContainer>
        <img src={IMAGES_LINKS.VISIT_US_IMG} alt="" />
      </ShopPhotoContainer>
      <Address>
        <AddressTitle>You can find us here</AddressTitle>
        <AddressTDescription>
          Lampova street 137. Kiev, Ukraine. We will be glad to see you in our
          shop
        </AddressTDescription>
      </Address>
    </AddressContainer>
  </VisitUsContainer>
);

export { VisitUs };
