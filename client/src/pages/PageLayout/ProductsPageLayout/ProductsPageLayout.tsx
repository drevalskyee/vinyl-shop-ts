import React, { FC, useState, useEffect } from "react";
import { Products } from "../../../components/Products/Products";
import { ProdutsItem, ApiPath } from "../../../types/types";
import {
  PageContainer,
  ContentHeaderContainer,
} from "../PageTemplate/PageLayoutTemplate.styles";
import { PageName } from "../PageTemplate/PageName/PageName";
import { closeSidebarAndCart } from "../../../store/slices/layoutSlice/layoutSlice";
import { useAppDispatch } from "../../../hooks/use-redux-actions";

interface ProductPageProps {
  path: ApiPath;
  backendData: ProdutsItem[];
  pageName: string;
}

const ProductsPageLayout: FC<ProductPageProps> = ({
  backendData,
  path,
  pageName,
}) => {
  const dispatch = useAppDispatch();
  return (
    <PageContainer onClick={() => dispatch(closeSidebarAndCart())}>
      <ContentHeaderContainer>
        <PageName pageName={pageName} />
      </ContentHeaderContainer>
      <Products data={backendData} path={path} />
    </PageContainer>
  );
};

export { ProductsPageLayout };
