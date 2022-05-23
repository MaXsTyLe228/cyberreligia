import {createStore, applyMiddleware, combineReducers} from "redux";
import {orderReducer} from "./servicesReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    service: orderReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))