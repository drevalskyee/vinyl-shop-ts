import React, { FC, useEffect } from "react";
import { ApiPath } from "../../types/types";
import { ProductsPageLayout } from "../PageLayout/ProductsPageLayout/ProductsPageLayout";
import { useAppDispatch, useAppSelector } from "../../hooks/use-redux-actions";
import { fetchSoundtracks } from "../../store/slices/fetchSlice/fetchSlice";

interface SoundtracksProps {
  path: ApiPath;
}

const Soundtracks: FC<SoundtracksProps> = () => {
  const data = useAppSelector((state) => state.fetchedData.Data.soundtracks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSoundtracks());
  }, [dispatch]);

  return (
    <ProductsPageLayout
      pageName="Soundtracks/OST"
      path={{ path: "soundtracks" }}
      backendData={data}
    />
  );
};

export { Soundtracks };
