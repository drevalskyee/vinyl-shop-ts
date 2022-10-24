import React from "react";
import {
  SidebarNavContainer,
  SidebarNavList,
  NavListItem,
  StyledLink,
} from "./SidebarNav.styles";
import { useAppDispatch } from "../../../hooks/use-redux-actions";
import { toggleSidebar } from "../../../store/slices/layoutSlice/layoutSlice";
import { ROUTES } from "../../../router/routes_constants/routes_constants";

const SidebarNav = () => {
  const dispatch = useAppDispatch();

  const activeNavLink = ({ isActive }) => ({
    color: isActive ? "#000000" : "#6a6a6a",
  });

  return (
    <SidebarNavContainer onClick={() => dispatch(toggleSidebar())}>
      <SidebarNavList>
        <NavListItem>
          <StyledLink to={ROUTES.NEW_ALBUMS} style={activeNavLink}>
            new
          </StyledLink>
        </NavListItem>
        <NavListItem>
          <StyledLink to={ROUTES.VINYL_CLASSIC} style={activeNavLink}>
            classic
          </StyledLink>
        </NavListItem>

        <NavListItem>
          <StyledLink to={ROUTES.SOUNDTRACKS} style={activeNavLink}>
            soundtracks
          </StyledLink>
        </NavListItem>
      </SidebarNavList>
    </SidebarNavContainer>
  );
};

export { SidebarNav };
