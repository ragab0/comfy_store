import { legacy_createStore } from "redux";
import { combineReducers,  } from "redux";
import rightFilterReducer from "./reducers/RightFilter";


const rootReducer = combineReducers({
  rightFilterReducer,
})


const store = legacy_createStore(
  rootReducer,
)


export default store;