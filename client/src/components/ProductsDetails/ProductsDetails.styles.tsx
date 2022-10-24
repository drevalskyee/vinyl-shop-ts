import styled from "@emotion/styled";

export const ProductContainer = styled.div`
  width: 100%;
  height: 88vh;
  background: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    width: 80%;
    height: 80%;
    object-fit: cover;
    border: 1px solid #000;
    box-shadow: 1px 1px 1px #000;

    @media screen and (max-width: 768px) {
      width: 65%;
    }

    @media screen and (max-width: 480px) {
      width: 75%;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 65%;
  }
`;

export const AlbumInfo = styled.div`
  width: 40%;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 35%;
  }
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 1rem;
  justify-content: space-around;
  margin-top: 0.4rem;
  padding-top: 1rem;

  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: space-between;
  }
`;

export const ArtistName = styled.div`
  min-width: 40%;

  border-bottom: 1px solid black;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    height: 20%;
  }
`;

export const AlbumName = styled.div`
  min-width: 40%;
  height: 8%;
  border-bottom: 1px solid black;
  padding: 1rem;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    height: 20%;
  }
`;

export const AlbumPrice = styled.div`
  min-width: 40%;
  height: 8%;
  border-bottom: 1px solid black;
  padding: 1rem;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    height: 20%;
  }
`;

export const AblumYear = styled.div`
  min-width: 40%;
  height: 8%;
  border-bottom: 1px solid black;
  padding: 1rem;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    height: 20%;
  }
`;

export const BoldText = styled.span`
  font-weight: 600;
`;

export const ButtonContainer = styled.div`
  width: 40%;
  height: 19%;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1.5rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;
