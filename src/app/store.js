import { combineReducers, compose, createStore } from "redux";
import counterReducer from "../app/features/Counter/reducer"

let rootReducer = combineReducers({
  counter: counterReducer
})

const composeEnhancers = window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__ || compose
let store = createStore(rootReducer, composeEnhancers())

export default store