import styled from "@emotion/styled";

export const HomePageImage = styled.div`
  width: 100%;
  height: 100%;

  &:before {
    background: rgba(0, 0, 0, 0.3);
    content: "";
    height: 86vh;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 100;
  }
`;

export const PageDescription = styled.div`
  position: absolute;
  top: 0%;
  background: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  height: 85vh;
`;

export const Title = styled.h2`
  padding: 2rem;
  font-size: 4rem;
  color: #fff;
  background: transparent;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Info = styled.div`
  color: #fff;
  padding: 2rem;
  font-size: 1.4rem;
  background: transparent;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
