import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layout/main/Layout";
import { Home } from "../pages/Home/Home";
import { NewProducts } from "../pages/NewProducts/NewProducts";
import { ProductsDetails } from "../components/ProductsDetails/ProductsDetails";
import { VinylClassic } from "../pages/VinylClassic/VinylClassic";
import { Soundtracks } from "../pages/Soundtracks/Soundtracks";
import { ROUTES } from "./routes_constants/routes_constants";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route
            path={ROUTES.NEW_ALBUMS}
            element={<NewProducts path={{ path: "new-albums" }} />}
          />
          <Route
            path={ROUTES.NEW_ALBUMS_ITEM}
            element={<ProductsDetails path={{ path: "new-albums" }} />}
          />
          <Route
            path={ROUTES.VINYL_CLASSIC}
            element={<VinylClassic path={{ path: "vinyl-classic" }} />}
          />
          <Route
            path={ROUTES.VINYL_CLASSIC_ITEM}
            element={<ProductsDetails path={{ path: "vinyl-classic" }} />}
          />
          <Route
            path={ROUTES.SOUNDTRACKS}
            element={<Soundtracks path={{ path: "soundtracks" }} />}
          />
          <Route
            path={ROUTES.SOUNDTRACKS_ITEM}
            element={<ProductsDetails path={{ path: "soundtracks" }} />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export { Router };
