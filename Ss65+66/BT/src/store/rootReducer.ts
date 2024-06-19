import { combineReducers } from "redux";
import profileReducer from "./reducers/profileReducer";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
import reducerCount from "./reducers/countReducer";
import rnReducer from "./reducers/createRandomNumberReducer";
import reducerState from "./reducers/changeStateReducer";
import changeColorReducer from "./reducers/changeColorReducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    users: userReducer,
    products: productReducer,
    count: reducerCount,
    randomNumber: rnReducer,
    changeState: reducerState,
    changeColor: changeColorReducer,
})

export type RootType = ReturnType<typeof rootReducer>

export default rootReducer;