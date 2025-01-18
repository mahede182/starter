import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import { colorApi } from "../api/colorApi";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        [colorApi.reducerPath]: colorApi.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(colorApi.middleware),
})