import { createSlice } from "@reduxjs/toolkit";

type LayoutState = {
  isOpenSidebar: boolean;
  isOpenCart: boolean;
};

const initialState: LayoutState = {
  isOpenSidebar: false,
  isOpenCart: false,
};

const LayoutSlice = createSlice({
  name: "layuot",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpenSidebar = !state.isOpenSidebar;
    },
    toggleCart: (state) => {
      state.isOpenCart = !state.isOpenCart;
    },
    closeSidebarAndCart: (state) => {
      state.isOpenSidebar = false;
      state.isOpenCart = false;
    },
  },
});

const { toggleSidebar, toggleCart, closeSidebarAndCart } = LayoutSlice.actions;
const LayoutReducer = LayoutSlice.reducer;

export { toggleSidebar, toggleCart, LayoutReducer, closeSidebarAndCart };
