import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setGlobal } from "next/dist/trace";

const initialState = {
  value: "all",
};

export const globalCategorySlice = createSlice({
  name: "globalCategory",
  initialState,
  reducers: {
    setGlobalCategory: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const {setGlobalCategory } = globalCategorySlice.actions;
export default globalCategorySlice.reducer;
