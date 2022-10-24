import styled from "@emotion/styled";

export const VisitUsContainer = styled.div`
  width: 100%;
  height: 75vh;
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  background: transparent;

  @media screen and (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

export const AddressContainer = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ShopPhotoContainer = styled.div`
  width: 50%;
  height: 100%;
  background: lightcoral;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Address = styled.div`
  width: 50%;
  height: 80%;
  background: lightgrey;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: transparent;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const AddressTitle = styled.h3`
  font-size: 2rem;
  background: transparent;
`;

export const AddressTDescription = styled.div`
  background: transparent;
  font-size: 1.3rem;
`;
