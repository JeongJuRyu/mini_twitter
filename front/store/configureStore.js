import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
//import createSagaMiddleware from "redux-saga";
import reducer from "../reducers";
//import rootSaga from "../sagas";

const configureStore = () => {
  //const sagaMiddleware = createSagaMiddleware();
  const middlewares = [];
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  //store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
