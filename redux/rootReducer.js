import { combineReducers } from "redux";

import counterReducer from "./counter/reducer";
import usersReducer from "./users/reducer";

const rootReducer = combineReducers({
   counter: counterReducer,
   users: usersReducer,
});

export default rootReducer;
