import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/productSlice";

export const store = configureStore({
    reducer: {
        product:productReducer,
        
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false, // ⚠️ turns off the warning — use only if you're sure
        }),
});