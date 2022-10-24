import { Request, Response, Router } from "express";
import { Products } from "../../data/data";
import { ROUTES } from "../../routes_constants/routes_constants";

const router = Router();

router.get(ROUTES.SOUNDTRACKS, (req: Request, res: Response) => {
  res.json(Products.soundtracks);
});

router.get(ROUTES.SOUNDTRACKS_ITEM, (req: Request, res: Response) => {
  const { id } = req.params;
  const singleProduct = Products.soundtracks.find(
    (product) => product.id === id
  );
  if (!singleProduct) {
    return res.status(404).send("Product not found");
  }
  res.json(singleProduct);
});

export { router as soundtracksRouter };
