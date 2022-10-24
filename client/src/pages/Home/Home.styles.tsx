import styled from "@emotion/styled";

export const HomePageContainer = styled.div`
  max-width: 95%;
  margin: 0 auto;
  min-height: auto;
  overflow: scroll;
  overflow: hidden;
  transition: 0.3s;
`;

export const HomePageInfoContainer = styled.div`
  width: 100%;
  min-height: 60vh;
  position: relative;

  & img {
    width: 100%;
    height: 86vh;
    object-fit: cover;
  }
`;
