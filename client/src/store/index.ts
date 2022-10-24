import { configureStore } from "@reduxjs/toolkit";
import { CartReducer } from "./slices/ cartSlice/cartSlice";
import { FetchSliceReducer } from "./slices/fetchSlice/fetchSlice";
import { LayoutReducer } from "./slices/layoutSlice/layoutSlice";

const store = configureStore({
  reducer: {
    layout: LayoutReducer,
    cart: CartReducer,
    fetchedData: FetchSliceReducer,
  },
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
