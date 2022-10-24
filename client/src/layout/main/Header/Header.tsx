import React, { FC } from "react";
import { Cart } from "../../../components/Cart/Cart";
import { CartIcon } from "../../../components/CartIcon/CartIcon";
import { Logo } from "../../../components/Logo/Logo";
import { Navbar } from "../../../components/Navbar/Navbar";
import { Sidebar } from "../../../components/Sidebar/Sidebar";
import { HeaderContainer } from "./Header.styles";
import { useAppDispatch } from "../../../hooks/use-redux-actions";
import { closeSidebarAndCart } from "../../../store/slices/layoutSlice/layoutSlice";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <HeaderContainer onClick={() => dispatch(closeSidebarAndCart)}>
      <Sidebar />
      <Logo />
      <Navbar />
      <CartIcon />
      <Cart />
    </HeaderContainer>
  );
};

export { Header };
