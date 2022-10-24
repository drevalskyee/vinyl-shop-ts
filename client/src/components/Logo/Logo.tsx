import React, { FC } from "react";
import { ShopNameContainer, ShopName, StyledLink } from "./Logo.styles";
import { MenuIcon } from "../MenuIcon/MenuIcon";
import { useAppDispatch } from "../../hooks/use-redux-actions";
import { closeSidebarAndCart } from "../../store/slices/layoutSlice/layoutSlice";

const Logo: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <ShopNameContainer>
      <MenuIcon />
      <ShopName>
        <StyledLink onClick={() => dispatch(closeSidebarAndCart())} to="/">
          the other place
        </StyledLink>
      </ShopName>
    </ShopNameContainer>
  );
};

export { Logo };
