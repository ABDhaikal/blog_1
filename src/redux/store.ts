import { configureStore } from "@reduxjs/toolkit";
import globalCategoryReducer from "./slices/globalCategory";

export const makeStore = () => {
  return configureStore({
    reducer: {
      globalCategory: globalCategoryReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
