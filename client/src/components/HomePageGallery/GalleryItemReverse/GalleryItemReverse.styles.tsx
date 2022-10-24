import styled from "@emotion/styled";

export const ReversedGalleryItemContainer = styled.div`
  width: 100%;
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
    order: 1;
  }
`;

export const GalleryItemDescription = styled.div`
  padding-right: 1.5rem;
  width: 50%;
  height: 100%;
  height: 40vh;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 480px) {
    order: 2;
  }
`;

export const Heading = styled.h3``;

export const DescriptionText = styled.div`
  width: 50%;
`;
