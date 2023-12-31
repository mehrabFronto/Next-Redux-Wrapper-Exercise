import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const masterReducer = (state, action) => {
   if (action.type === HYDRATE) {
      const nextState = {
         ...state, // use previous state
         counter: {
            count: state.counter.count + action.payload.counter.count,
         },
         users: {
            users: [
               ...new Set([
                  ...state.users.users,
                  ...action.payload.users.users,
               ]),
            ],
         },
      };

      return nextState;
   } else {
      return rootReducer(state, action);
   }
};

const bindMiddleware = (middleware) => {
   if (process.env.NODE_ENV !== "production") {
      const { composeWithDevTools } = require("redux-devtools-extension");
      return composeWithDevTools(applyMiddleware(...middleware));
   }

   return applyMiddleware(...middleware);
};

const initStore = () => createStore(masterReducer, bindMiddleware([thunk]));

export const wrapper = createWrapper(initStore);
