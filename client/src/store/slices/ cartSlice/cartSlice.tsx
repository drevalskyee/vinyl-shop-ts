import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ItemFromCart = {
  artist: string;
  album: string;
  price: string | number;
  year: string;
  image: string;
  quantity: number;
  id: string;
};

type CartState = {
  CartItems: ItemFromCart[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
};

const initialState: CartState = {
  CartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ItemFromCart>) => {
      const itemInCart = state.CartItems.find(
        (item) => item.id === action.payload.id
      );

      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.CartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<ItemFromCart>) => {
      const itemId = action.payload.id;
      state.CartItems = state.CartItems.filter((item) => item.id !== itemId);
    },
    incrementQuantity: (state, action: PayloadAction<ItemFromCart>) => {
      const itemInCart = state.CartItems.find(
        (item) => item.id === action.payload.id
      );
      itemInCart.quantity += 1;
    },

    decrementQuantity: (state, action: PayloadAction<ItemFromCart>) => {
      const itemInCart = state.CartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart.quantity === 1) {
        itemInCart.quantity = 1;
      } else {
        itemInCart.quantity -= 1;
      }
    },
    getTotals: (state) => {
      const initValue = 0;
      let total = 0;
      let calqQuantity = 0;
      state.CartItems.reduce((prevValue, currentValue) => {
        calqQuantity += currentValue.quantity;
        total =
          prevValue +
          Number(currentValue.price) * Number(currentValue.quantity);
        return total;
      }, initValue);

      state.cartTotalAmount = total;
      state.cartTotalQuantity = calqQuantity;
    },
  },
});

const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  getTotals,
} = CartSlice.actions;
const CartReducer = CartSlice.reducer;

export {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  getTotals,
  CartReducer,
};
