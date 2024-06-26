import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./reducers/todoSlice";

const store = configureStore({
    reducer: {
        todo: todoSlice
    }
})

export type RootType = ReturnType<typeof store.getState>

export default store