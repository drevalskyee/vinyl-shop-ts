import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ROUTES } from "../../../router/routes_constants/routes_constants";

type FetchedItem = {
  artist: string;
  album: string;
  price: string;
  year: string;
  image: string;
  quantity: number;
  id: string;
};

type FetchedDataState = {
  Data: {
    newProducts: FetchedItem[];
    vinylClassic: FetchedItem[];
    soundtracks: FetchedItem[];
  };
};

const initialState: FetchedDataState = {
  Data: {
    newProducts: [],
    vinylClassic: [],
    soundtracks: [],
  },
};

export const fetchNewProducts = createAsyncThunk<FetchedItem[], undefined>(
  "fetchedData/fetchNewProducts",
  async function () {
    const response = await fetch(ROUTES.LOCALHOST + ROUTES.NEW_ALBUMS);
    const data = await response.json();
    return data;
  }
);

export const fetchVinylClassic = createAsyncThunk<FetchedItem[], undefined>(
  "fetchedData/fetchVinulClassic",
  async function () {
    const response = await fetch(ROUTES.LOCALHOST + ROUTES.VINYL_CLASSIC);
    const data = await response.json();
    return data;
  }
);

export const fetchSoundtracks = createAsyncThunk<FetchedItem[], undefined>(
  "fetchedData/fetchSoundtracks",
  async function () {
    const response = await fetch(ROUTES.LOCALHOST + ROUTES.SOUNDTRACKS);
    const data = await response.json();
    return data;
  }
);

const FetchSlice = createSlice({
  name: "fetchedData",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchNewProducts.fulfilled, (state, action) => {
        state.Data.newProducts = action.payload;
      })
      .addCase(fetchVinylClassic.fulfilled, (state, action) => {
        state.Data.vinylClassic = action.payload;
      })
      .addCase(fetchSoundtracks.fulfilled, (state, action) => {
        state.Data.soundtracks = action.payload;
      });
  },
});

const FetchSliceReducer = FetchSlice.reducer;

export { FetchSliceReducer };
