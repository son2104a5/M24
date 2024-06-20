import { combineReducers } from "redux";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
    productReducer,
    cartReducer
})

export default rootReducer;