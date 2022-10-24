import styled from "@emotion/styled";
import {
  TiSocialInstagram,
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";

export const FooterContainer = styled.footer`
  width: 100vw;
  height: 10vh;
  background: #dedede;
  border-top: 1px solid #353535;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 1rem;
  margin-top: 1rem;
  overflow: hidden;
`;

export const SocialsLinksContainer = styled.div`
  /* background-color: lightblue; */
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2rem;

  @media screen and (max-width: 768px) {
    width: 45%;
  }

  @media screen and (max-width: 480px) {
    width: 50%;
  }
`;

export const FooterInfoContainer = styled.div`
  /* background: lightcoral; */
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #9e9e9e;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    width: 55%;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.6rem;
  }
`;

export const SocialLinkContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`;

export const InstagramLink = styled(TiSocialInstagram)`
  width: 40px;
  height: 40px;
  color: #171616;
  cursor: pointer;
  background: #dedede;
  border-radius: 50%;
  transition: 0.1s;

  &:hover {
    color: #ed444e;
    transition: 0.1s;
  }
`;

export const FacebookLink = styled(TiSocialFacebook)`
  width: 40px;
  height: 40px;
  color: #171616;
  cursor: pointer;
  background: #dedede;
  border-radius: 50%;
  transition: 0.1s;

  &:hover {
    color: #4867aa;
    transition: 0.1s;
  }
`;

export const TwitterLink = styled(TiSocialTwitter)`
  width: 40px;
  height: 40px;
  color: #171616;
  cursor: pointer;
  background: #dedede;
  border-radius: 50%;
  transition: 0.1s;

  &:hover {
    color: #1c9bef;
    transition: 0.1s;
  }
`;

export const YoutubeLink = styled(TiSocialYoutube)`
  width: 40px;
  height: 40px;
  color: #171616;
  cursor: pointer;
  background: #dedede;
  border-radius: 50%;
  transition: 0.1s;

  &:hover {
    color: #f20000;
    transition: 0.1s;
  }
`;
