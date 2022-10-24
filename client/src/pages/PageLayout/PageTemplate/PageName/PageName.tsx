import React, { FC } from "react";
import { PageNameContainer, PageNameTitle } from "./PageName.styles";

interface PageNameProps {
  pageName: string;
}

const PageName: FC<PageNameProps> = ({ pageName }) => (
  <PageNameContainer>
    <PageNameTitle>{pageName}</PageNameTitle>
  </PageNameContainer>
);

export { PageName };
