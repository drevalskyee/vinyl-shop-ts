import React, { FC } from "react";
import {
  FooterContainer,
  SocialsLinksContainer,
  FooterInfoContainer,
  SocialLinkContainer,
  InstagramLink,
  FacebookLink,
  TwitterLink,
  YoutubeLink,
} from "./Footer.styles";
import { useAppDispatch } from "../../../hooks/use-redux-actions";
import { closeSidebarAndCart } from "../../../store/slices/layoutSlice/layoutSlice";

const Footer: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <FooterContainer onClick={() => dispatch(closeSidebarAndCart())}>
      <FooterInfoContainer>
        © The other place online store is used under license of the copyright
        holder VinylLTD
      </FooterInfoContainer>
      <SocialsLinksContainer>
        <SocialLinkContainer>
          <InstagramLink />
        </SocialLinkContainer>
        <SocialLinkContainer>
          <FacebookLink />
        </SocialLinkContainer>
        <SocialLinkContainer>
          <YoutubeLink />
        </SocialLinkContainer>
        <SocialLinkContainer>
          <TwitterLink />
        </SocialLinkContainer>
      </SocialsLinksContainer>
    </FooterContainer>
  );
};

export { Footer };
