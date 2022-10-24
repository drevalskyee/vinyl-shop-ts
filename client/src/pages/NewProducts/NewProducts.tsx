import React, { FC, useEffect } from "react";
import { ProductsPageLayout } from "../PageLayout/ProductsPageLayout/ProductsPageLayout";
import { ApiPath } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../hooks/use-redux-actions";
import { fetchNewProducts } from "../../store/slices/fetchSlice/fetchSlice";

interface NewProductsProps {
  path: ApiPath;
}

const NewProducts: FC<NewProductsProps> = () => {
  const data = useAppSelector((state) => state.fetchedData.Data.newProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNewProducts());
  }, [dispatch]);

  return (
    <ProductsPageLayout
      pageName="New Receipts"
      path={{ path: "new-albums" }}
      backendData={data}
    />
  );
};

export { NewProducts };
