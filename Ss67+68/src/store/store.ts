import { createStore } from "redux";
import bookReducer from "./reducers/bookReducer";

export const store = createStore(bookReducer)
export type RootType = ReturnType<typeof bookReducer>