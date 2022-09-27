import { configureStore } from "@reduxjs/toolkit";
import { filesSlice } from "./slices/filesSlices";


export const store = configureStore({
    reducer: {
        files: filesSlice.reducer,
    },
  })