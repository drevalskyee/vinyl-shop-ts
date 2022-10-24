import styled from "@emotion/styled";

export const SidebarContainer = styled.div<{ isOpenSidebar: boolean }>`
  width: 50%;
  height: 100vh;
  overflow: hidden;
  z-index: 10000;
  background: #dedede;
  position: fixed;
  top: 0;
  left: 0%;
  // here paste commented code
  left: ${({ isOpenSidebar }) => (isOpenSidebar ? "0%" : "-100%")};
  /* left: -100%; */
  transition: 0.4s;
  box-shadow: -3px 0 5px 0 #000;

  @media screen and (max-width: 480px) {
    width: 70%;
  }
`;

// left: ${({ isOpenSidebar }) => (isOpenSidebar ? '0%' : '-100%')};
// bottom: ${({ isOpenCart }) => (isOpenCart ? '0%' : '0%')};
