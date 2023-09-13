import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

import roomsReducer from "./slices/rooms/Rooms";
import roomReducer from "./slices/room/Room";
import rightFilterReducer from "./slices/right_filter/RightFilter";
import topFilterReducer from "./slices/top_fitler/TopFilter";


const rootReducer = combineReducers({
  roomsReducer,
  roomReducer,
  rightFilterReducer,
  topFilterReducer,
})


const store = legacy_createStore(rootReducer, applyMiddleware(createLogger(), thunkMiddleware));


export default store;