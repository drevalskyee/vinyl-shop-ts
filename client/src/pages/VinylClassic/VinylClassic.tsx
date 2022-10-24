import React, { FC, useEffect } from "react";
import { ApiPath } from "../../types/types";
import { ProductsPageLayout } from "../PageLayout/ProductsPageLayout/ProductsPageLayout";
import { useAppDispatch, useAppSelector } from "../../hooks/use-redux-actions";
import { fetchVinylClassic } from "../../store/slices/fetchSlice/fetchSlice";

interface VinylClassicProps {
  path: ApiPath;
}

const VinylClassic: FC<VinylClassicProps> = () => {
  const data = useAppSelector((state) => state.fetchedData.Data.vinylClassic);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchVinylClassic());
  }, [dispatch]);

  return (
    <ProductsPageLayout
      pageName="Vinyl Classic"
      path={{ path: "vinyl-classic" }}
      backendData={data}
    />
  );
};

export { VinylClassic };
