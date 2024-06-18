import { combineReducers } from "redux";
import profileReducer from "./reducers/profileReducer";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
import reducerCount from "./reducers/countReducer";
import rnReducer from "./reducers/createRandomNumberReducer";
import reducerState from "./reducers/changeStateReducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    users: userReducer,
    products: productReducer,
    count: reducerCount,
    randomNumber: rnReducer,
    changeState: reducerState,
})

export default rootReducer;