import {legacy_createStore , applyMiddleware,compose  } from "redux";
import thunk from "redux-thunk";

import { reducer } from "./reducer";


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
       
    }) : compose;

    const middleware = [thunk];

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

export const store =legacy_createStore(reducer,enhancer)