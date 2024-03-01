import { combineReducers } from "redux";
import authReducer from "./authReducer";
import propertyReducer from "./propertyReducer";
import feedbackReducer from "./feedbackReducer";
import paymentReducer from "./paymentReducer";
import userReducer from "./userReducer";
import contractReducer from "./contractReducer";
export const reducers = combineReducers({
  authReducer,
  propertyReducer,
  feedbackReducer,
  paymentReducer,
  userReducer,
  contractReducer,
});
