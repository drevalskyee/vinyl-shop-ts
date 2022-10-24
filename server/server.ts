import * as dotenv from "dotenv";
import express, { Express } from "express";
import cors from "cors";
import { newProductsRouter } from "./routes/vinylProducts/newProducts";
import { vinylClassicRouter } from "./routes/vinylClassic/vinylClassic";
import { soundtracksRouter } from "./routes/soundtracks/soundtracks";
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;
app.use(cors());

app.use(newProductsRouter);
app.use(vinylClassicRouter);
app.use(soundtracksRouter);

app.listen(PORT, () => `server started on${PORT} port...`);
