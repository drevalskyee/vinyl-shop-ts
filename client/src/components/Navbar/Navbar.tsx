import React, { FC } from "react";
import {
  NavbarContainer,
  Navlist,
  NavlistItem,
  StyledLink,
} from "./Navbar.styles";
import { useAppDispatch } from "../../hooks/use-redux-actions";
import { closeSidebarAndCart } from "../../store/slices/layoutSlice/layoutSlice";
import { ROUTES } from "../../router/routes_constants/routes_constants";

const Navbar: FC = () => {
  const dispatch = useAppDispatch();

  const activeNavLink = ({ isActive }) => ({
    color: isActive ? "#000000" : "#6a6a6a",
  });

  return (
    <NavbarContainer onClick={() => dispatch(closeSidebarAndCart())}>
      <Navlist>
        <NavlistItem>
          <StyledLink to={ROUTES.NEW_ALBUMS} style={activeNavLink}>
            new
          </StyledLink>
        </NavlistItem>
        <NavlistItem>
          <StyledLink to={ROUTES.VINYL_CLASSIC} style={activeNavLink}>
            classic
          </StyledLink>
        </NavlistItem>

        <NavlistItem>
          <StyledLink to={ROUTES.SOUNDTRACKS} style={activeNavLink}>
            soundtracks
          </StyledLink>
        </NavlistItem>
      </Navlist>
    </NavbarContainer>
  );
};

export { Navbar };
