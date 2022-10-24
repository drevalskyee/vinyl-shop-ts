import React, { FC } from "react";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

interface LayoutProps {
  children;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export { Layout };
