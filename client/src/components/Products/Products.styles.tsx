import styled from "@emotion/styled";

export const ProductsContainer = styled.div`
  padding: 1rem;
  height: auto;
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));

  @media screen and (max-width: 900px) {
    grid-gap: 1.5rem;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ProductsHeading = styled.h3`
  margin-top: 1rem;
  padding-left: 1rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
