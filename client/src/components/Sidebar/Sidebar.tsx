import React, { FC } from "react";
import { SidebarContainer } from "./Sidebar.styles";
import { SidebarHeader } from "./SidebarHeader/SidebarHeader";
import { SidebarNav } from "./SidebarNav/SidebarNav";
import { useAppSelector } from "../../hooks/use-redux-actions";

const Sidebar: FC = () => {
  const isOpenSidebar = useAppSelector((state) => state.layout.isOpenSidebar);

  return (
    <SidebarContainer isOpenSidebar={isOpenSidebar}>
      <SidebarHeader />
      <SidebarNav />
    </SidebarContainer>
  );
};

export { Sidebar };
