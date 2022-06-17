import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import ProductSlice from "./slice/ProductSlice";
let sagaMiddleware = createSagaMiddleware();

let middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(sagaMiddleware);

const rootReducers = combineReducers({
  products: ProductSlice,
  devTools: process.env.NODE_ENV !== "production",
});

const store = configureStore({
  reducer: rootReducers,
  middleware: middleware,
});
sagaMiddleware.run(rootSaga);
export default store;
