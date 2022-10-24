import React from "react";
import { HomePageDescription } from "../../components/HomePageDescription/HomePageDescription";
import { HomePageGallery } from "../../components/HomePageGallery/HomePageGallery";
import { VisitUs } from "../../components/VisitUs/VisitUs";
import { HomePageContainer, HomePageInfoContainer } from "./Home.styles";
import { useAppDispatch } from "../../hooks/use-redux-actions";
import { closeSidebarAndCart } from "../../store/slices/layoutSlice/layoutSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  return (
    <HomePageContainer onClick={() => dispatch(closeSidebarAndCart())}>
      <HomePageInfoContainer>
        <HomePageDescription />
        <HomePageGallery />
        <VisitUs />
      </HomePageInfoContainer>
    </HomePageContainer>
  );
};

export { Home };
