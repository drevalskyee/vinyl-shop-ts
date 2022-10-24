import styled from "@emotion/styled";

export const GalleryItemContainer = styled.div`
  width: 100%;
  /* background: lightblue; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const GalleryItemImage = styled.div`
  width: 50%;
  height: 40vh;
  background: lightcyan;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 44vh;
  }
`;

export const GalleryItemDescription = styled.div`
  width: 50%;
  height: 100%;
  height: 40vh;
  color: #171616;
  display: flex;
  align-items: flex-start;
  padding-left: 1.5rem;
  flex-direction: column;
  justify-content: space-around;
`;

export const Heading = styled.h3``;

export const DescriptionText = styled.div`
  width: 50%;
`;
