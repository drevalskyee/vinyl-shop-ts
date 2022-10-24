import React, { FC } from "react";
import {
  SidebarHeaderContainer,
  SidebarNameContainer,
  ShopNameSidebar,
  CloseSidebarContainer,
  CloseSidebarButton,
  StyledLink,
} from "./SidebarHeader.styles";
import { useAppDispatch } from "../../../hooks/use-redux-actions";
import {
  toggleSidebar,
  closeSidebarAndCart,
} from "../../../store/slices/layoutSlice/layoutSlice";

const SidebarHeader: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <SidebarHeaderContainer>
      <SidebarNameContainer>
        <ShopNameSidebar>
          <StyledLink onClick={() => dispatch(closeSidebarAndCart())} to="/">
            the other place
          </StyledLink>
        </ShopNameSidebar>
      </SidebarNameContainer>
      <CloseSidebarContainer>
        <CloseSidebarButton onClick={() => dispatch(toggleSidebar())} />
      </CloseSidebarContainer>
    </SidebarHeaderContainer>
  );
};

export { SidebarHeader };
