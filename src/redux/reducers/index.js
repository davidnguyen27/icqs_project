import { combineReducers } from "redux";
import authReducer from "./authReducer";
import propertyReducer from "./propertyReducer";
import feedbackReducer from "./feedbackReducer";
import paymentReducer from "./paymentReducer";
export const reducers = combineReducers({
  authReducer,
  propertyReducer,
  feedbackReducer,
  paymentReducer,
});
