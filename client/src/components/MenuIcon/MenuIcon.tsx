import React, { FC } from "react";
import { useAppDispatch } from "../../hooks/use-redux-actions";
import { MenuIconContainer, Icon } from "./MenuIcon.styles";
import { toggleSidebar } from "../../store/slices/layoutSlice/layoutSlice";

const MenuIcon: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <MenuIconContainer>
      <Icon onClick={() => dispatch(toggleSidebar())} />
    </MenuIconContainer>
  );
};

export { MenuIcon };
