import styled from "@emotion/styled";

export const PageContainer = styled.div`
  max-width: 95%;
  margin: 0 auto;
  min-height: auto;
  /* height: 100vh; */
  overflow: scroll;
  background: transparent;
  overflow: hidden;
  transition: 0.3s;
  margin-bottom: 1rem;
`;

export const ContentHeaderContainer = styled.div`
  width: 100%;
  height: 10%;
  background: #cfcece;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
`;
