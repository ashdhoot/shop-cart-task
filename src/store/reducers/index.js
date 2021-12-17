import { combineReducers } from "redux";
import productsReducers from "./productReducers";

const rootReducer = combineReducers({
  product: productsReducers,
});

export default rootReducer;
